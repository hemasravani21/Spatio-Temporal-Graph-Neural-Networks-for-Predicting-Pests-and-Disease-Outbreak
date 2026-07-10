import os
import json
import shutil
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import (
    Conv2D, MaxPooling2D, Flatten, Dense,
    Dropout, GlobalAveragePooling2D, Input, BatchNormalization
)
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau
from tensorflow.keras.applications import MobileNetV2

# ================================================================
#                        PATHS
# ================================================================
BASE_DIR    = os.path.dirname(os.path.abspath(__file__))
DATASET_DIR = os.path.join(BASE_DIR, "dataset")
MODEL_DIR   = os.path.join(BASE_DIR, "models")
os.makedirs(MODEL_DIR, exist_ok=True)

# ---- Image dataset paths ----
DISEASE_IMG_DIR   = os.path.join(DATASET_DIR, "leaf_buds")           # leaf disease classes
PEST_IMG_DIR      = os.path.join(DATASET_DIR, "Pest_Data")           # pest classes
PLANTVILLAGE_DIR  = os.path.join(DATASET_DIR, "PlantVillage")        # PlantVillage disease classes
CASHEW_BASE_DIR   = os.path.join(DATASET_DIR, "Cashew_anthracnose")  # flat images -> wrapped below
INSECT_TRAIN_DIR  = os.path.join(DATASET_DIR, "classification", "train")  # insect classification (train split)
PV_COLOR_DIR      = os.path.join(DATASET_DIR, "plantvillage dataset", "color")  # PlantVillage color

# ---- CSV dataset paths ----
CROP_PROD_CSV   = os.path.join(DATASET_DIR, "crop_production.csv")
CROP_YIELD_CSV  = os.path.join(DATASET_DIR, "crop_yield.csv")
SENSORS_CSV     = os.path.join(DATASET_DIR, "Dataset_sensors.csv")
WEATHER_CSV     = os.path.join(DATASET_DIR, "state_weather_data_1997_2020.csv")

# ================================================================
#                    CONSTANTS
# ================================================================
IMG_SIZE         = 224
BATCH_SIZE       = 16
EPOCHS           = 15
VALIDATION_SPLIT = 0.2

CALLBACKS = [
    EarlyStopping(patience=4, restore_best_weights=True, verbose=1),
    ReduceLROnPlateau(patience=2, factor=0.5, verbose=1)
]

# ================================================================
#              HELPER: wrap flat folder for flow_from_directory
# ================================================================
def wrap_flat_folder(src_dir, class_name="positive"):
    """
    flow_from_directory expects sub-folders as class labels.
    If src_dir contains raw images directly (no sub-dirs), we create
    a temporary wrapper so the generator works correctly.
    Returns the new parent directory to pass to flow_from_directory.
    """
    has_subdirs = any(
        os.path.isdir(os.path.join(src_dir, d))
        for d in os.listdir(src_dir)
    )
    if has_subdirs:
        return src_dir  # already has sub-folders

    # Build a sibling temp wrapper directory
    wrapper = src_dir.rstrip("/\\") + "_wrapped"
    class_dir = os.path.join(wrapper, class_name)
    if not os.path.exists(class_dir):
        os.makedirs(class_dir, exist_ok=True)
        for fname in os.listdir(src_dir):
            src = os.path.join(src_dir, fname)
            dst = os.path.join(class_dir, fname)
            if os.path.isfile(src) and not os.path.exists(dst):
                shutil.copy2(src, dst)
        print(f"  ✅ Created wrapper: {wrapper}")
    return wrapper

# ================================================================
#            HELPER: build a CNN model
# ================================================================
def build_cnn(num_classes, use_mobilenet=False):
    if use_mobilenet:
        base = MobileNetV2(
            weights="imagenet",
            include_top=False,
            input_shape=(IMG_SIZE, IMG_SIZE, 3)
        )
        base.trainable = False          # freeze base for fast transfer learning
        model = Sequential([
            base,
            GlobalAveragePooling2D(),
            Dense(256, activation="relu"),
            Dropout(0.3),
            Dense(num_classes, activation="softmax")
        ])
    else:
        model = Sequential([
            Input(shape=(IMG_SIZE, IMG_SIZE, 3)),
            Conv2D(32, (3, 3), activation="relu", padding="same"),
            BatchNormalization(),
            MaxPooling2D(),
            Conv2D(64, (3, 3), activation="relu", padding="same"),
            BatchNormalization(),
            MaxPooling2D(),
            Conv2D(128, (3, 3), activation="relu", padding="same"),
            BatchNormalization(),
            MaxPooling2D(),
            Flatten(),
            Dense(256, activation="relu"),
            Dropout(0.4),
            Dense(num_classes, activation="softmax")
        ])
    model.compile(
        optimizer="adam",
        loss="categorical_crossentropy",
        metrics=["accuracy"]
    )
    return model

# ================================================================
#            HELPER: create train/val generators
# ================================================================
def make_generators(directory, datagen=None):
    if datagen is None:
        datagen = ImageDataGenerator(
            rescale=1.0 / 255,
            validation_split=VALIDATION_SPLIT,
            rotation_range=20,
            width_shift_range=0.1,
            height_shift_range=0.1,
            horizontal_flip=True,
            zoom_range=0.1,
        )
    train_gen = datagen.flow_from_directory(
        directory,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode="categorical",
        subset="training",
        shuffle=True,
    )
    val_gen = datagen.flow_from_directory(
        directory,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode="categorical",
        subset="validation",
    )
    return train_gen, val_gen

# ================================================================
#            HELPER: train & save one image model
# ================================================================
def train_image_model(name, directory, use_mobilenet=False):
    print(f"\n{'='*60}")
    print(f"  🌿  {name} Model")
    print(f"{'='*60}")
    directory = wrap_flat_folder(directory) if directory else directory
    train_gen, val_gen = make_generators(directory)
    num_classes = train_gen.num_classes
    print(f"  📂 Classes ({num_classes}): {list(train_gen.class_indices.keys())}")
    model = build_cnn(num_classes, use_mobilenet=use_mobilenet)
    history = model.fit(
        train_gen,
        validation_data=val_gen,
        epochs=EPOCHS,
        callbacks=CALLBACKS,
        verbose=1,
    )
    save_path = os.path.join(MODEL_DIR, f"{name}.keras")
    model.save(save_path)
    print(f"  💾 Saved → {save_path}")
    return {
        "train_acc": history.history["accuracy"],
        "val_acc":   history.history["val_accuracy"],
        "classes":   list(train_gen.class_indices.keys()),
    }

# ================================================================
#                    IMAGE MODEL TRAINING
# ================================================================
results = {}

# 1. Leaf Disease Model  (leaf_buds)
results["leaf_disease"] = train_image_model(
    name="disease_cnn",
    directory=DISEASE_IMG_DIR,
    use_mobilenet=False,
)

# 2. Pest Detection Model  (Pest_Data)
results["pest_detection"] = train_image_model(
    name="pest_cnn",
    directory=PEST_IMG_DIR,
    use_mobilenet=False,
)

# 3. PlantVillage Disease Model  (PlantVillage — Pepper, Potato, Tomato)
results["plantvillage"] = train_image_model(
    name="plantvillage_cnn",
    directory=PLANTVILLAGE_DIR,
    use_mobilenet=True,    # large dataset → transfer learning is faster & better
)

# 4. Cashew Anthracnose Model  (Cashew_anthracnose — flat image folder)
cashew_wrapped = wrap_flat_folder(CASHEW_BASE_DIR, class_name="anthracnose")
results["cashew_anthracnose"] = train_image_model(
    name="cashew_cnn",
    directory=cashew_wrapped,
    use_mobilenet=False,
)

# 5. Insect Classification Model  (classification/train)
results["insect_classification"] = train_image_model(
    name="insect_cnn",
    directory=INSECT_TRAIN_DIR,
    use_mobilenet=True,    # ants, bees, beetles … transfer learning preferred
)

# 6. PlantVillage Color Model  (plantvillage dataset/color)
results["pv_color"] = train_image_model(
    name="pv_color_cnn",
    directory=PV_COLOR_DIR,
    use_mobilenet=True,
)

# ================================================================
#               CSV DATASET ANALYSIS
# ================================================================
print(f"\n{'='*60}")
print("  📊  CSV Dataset Summaries")
print(f"{'='*60}")

# ---- 1. Crop Production ----
print("\n📄 Crop Production (crop_production.csv)")
try:
    crop_prod = pd.read_csv(CROP_PROD_CSV)
    print(f"  Shape: {crop_prod.shape}")
    print(f"  Columns: {crop_prod.columns.tolist()}")
    if "Crop" in crop_prod.columns and "Production" in crop_prod.columns:
        print("  Avg Production per Crop:")
        print(crop_prod.groupby("Crop")["Production"].mean().sort_values(ascending=False).head(10))
    else:
        print(crop_prod.head(3))
except Exception as e:
    print(f"  ⚠️  Could not load crop_production.csv: {e}")

# ---- 2. Crop Yield ----
print("\n📄 Crop Yield (crop_yield.csv)")
try:
    crop_yield = pd.read_csv(CROP_YIELD_CSV)
    print(f"  Shape: {crop_yield.shape}")
    print(f"  Columns: {crop_yield.columns.tolist()}")
    if "crop" in crop_yield.columns and "yield" in crop_yield.columns:
        print("  Avg Yield per Crop (top 10):")
        print(crop_yield.groupby("crop")["yield"].mean().sort_values(ascending=False).head(10))
    if "season" in crop_yield.columns:
        print("  Records per Season:")
        print(crop_yield["season"].value_counts())
except Exception as e:
    print(f"  ⚠️  Could not load crop_yield.csv: {e}")

# ---- 3. IoT Sensor Data ----
print("\n📄 Sensor Data (Dataset_sensors.csv)")
try:
    sensors = pd.read_csv(SENSORS_CSV)
    # Drop unnamed columns
    sensors = sensors.loc[:, ~sensors.columns.str.startswith("Unnamed")]
    print(f"  Shape: {sensors.shape}")
    print(f"  Columns: {sensors.columns.tolist()}")
    print("  Descriptive Statistics:")
    print(sensors.describe().round(2))
    print(f"  Missing values:\n{sensors.isnull().sum()}")
except Exception as e:
    print(f"  ⚠️  Could not load Dataset_sensors.csv: {e}")

# ---- 4. State Weather Data (1997-2020) ----
print("\n📄 Weather Data (state_weather_data_1997_2020.csv)")
try:
    weather = pd.read_csv(WEATHER_CSV)
    print(f"  Shape: {weather.shape}")
    print(f"  Columns: {weather.columns.tolist()}")
    if "state" in weather.columns and "avg_temp_c" in weather.columns:
        print("  Average Temperature per State (top 10):")
        print(weather.groupby("state")["avg_temp_c"].mean().sort_values(ascending=False).head(10))
    if "year" in weather.columns:
        print(f"  Year Range: {weather['year'].min()} – {weather['year'].max()}")
except Exception as e:
    print(f"  ⚠️  Could not load state_weather_data_1997_2020.csv: {e}")

# ================================================================
#               SAVE METRICS & CLASS LABELS
# ================================================================
print(f"\n{'='*60}")
print("  💾  Saving Metrics & Class Labels …")
print(f"{'='*60}")

metrics_payload = {}
classes_payload = {}

for key, val in results.items():
    metrics_payload[key] = {
        "train_acc": val["train_acc"],
        "val_acc":   val["val_acc"],
    }
    classes_payload[key] = val["classes"]

with open(os.path.join(MODEL_DIR, "metrics.json"), "w") as f:
    json.dump(metrics_payload, f, indent=4)

with open(os.path.join(MODEL_DIR, "classes.json"), "w") as f:
    json.dump(classes_payload, f, indent=4)

print("  ✅ metrics.json and classes.json saved to", MODEL_DIR)
print("\n🎉 ALL DATASETS PROCESSED SUCCESSFULLY!")
