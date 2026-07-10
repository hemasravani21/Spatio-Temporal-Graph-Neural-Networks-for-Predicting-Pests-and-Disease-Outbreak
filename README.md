# Spatio-Temporal Graph Neural Networks for Predicting Pests and Disease Outbreak

## 🌿 AgriGuard - AI-Powered Crop Disease & Pest Outbreak Prediction System

AgriGuard is an advanced agricultural intelligence platform that leverages **Spatio-Temporal Graph Neural Networks (ST-GNN)** to predict pest and disease outbreaks across crop regions. By combining deep learning, real-time weather data, and graph-based spatial modeling, it provides farmers and agricultural authorities with early warnings and actionable insights.

---

## 🚀 Key Features

- **ST-GNN Model**: Spatiotemporal prediction of pest and disease outbreaks using graph neural networks
- **Real-Time Weather Integration**: Fetches live weather data via Open-Meteo API to adjust risk predictions
- **Leaf Disease Detection**: Upload leaf images for instant AI-powered disease classification
- **Multi-Language Support**: English and Telugu language support across the application
- **SMS/Email Notifications**: Alert system for high-risk outbreak conditions
- **Doctor/Expert Review System**: Escalation workflow for critical cases
- **Historical Analysis**: Track outbreak trends over time (1997–2020 dataset)
- **Interactive Dashboard**: Visualize risk levels, weather impact, and prediction reports

---

## 🧠 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Python, Flask |
| **AI/ML** | TensorFlow/Keras, ST-GNN, CNN |
| **Database** | SQLite |
| **Frontend** | HTML, CSS, JavaScript |
| **Weather API** | Open-Meteo |
| **Notifications** | SMTP Email, SMS |

---

## 📁 Project Structure

```
2026project/
├── app.py                  # Main Flask application
├── train.py                # Model training script
├── requirements.txt        # Python dependencies
├── dataset/
│   ├── classes.txt         # Disease class labels
│   ├── train.txt           # Training data index
│   ├── val.txt             # Validation data index
│   └── state_weather_data_1997_2020.csv  # Historical weather data
├── models/                 # Trained model weights
├── static/
│   ├── css/               # Stylesheets
│   └── js/                # JavaScript files
└── templates/             # HTML templates
    ├── index.html
    ├── login.html
    └── ...
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Python 3.8+
- pip

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemasravani21/Spatio-Temporal-Graph-Neural-Networks-for-Predicting-Pests-and-Disease-Outbreak.git
   cd Spatio-Temporal-Graph-Neural-Networks-for-Predicting-Pests-and-Disease-Outbreak
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add your API keys and credentials (see `.env.example`)

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5000`

---

## 📊 Dataset

- **PlantVillage Dataset**: Used for training the leaf disease classification model (38 crop disease classes)
- **State Weather Data (1997–2020)**: Historical meteorological data for spatiotemporal outbreak modeling

> **Note**: The large image datasets are not included in this repository due to size constraints. Download the PlantVillage dataset from [Kaggle](https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset) or [official sources](https://plantvillage.psu.edu/).

---

## 🔬 Model Architecture

The ST-GNN model combines:
- **Spatial Graph Convolutions**: Model geographic relationships between crop regions
- **Temporal LSTM Layers**: Capture time-series patterns in outbreak data
- **CNN Branch**: Process leaf image features for disease classification
- **Fusion Layer**: Combine weather, spatial, and visual features for final prediction

---

## 📈 Performance

| Metric | Value |
|--------|-------|
| Disease Classification Accuracy | ~95% |
| Outbreak Prediction F1-Score | ~0.89 |
| Weather-adjusted Risk Accuracy | ~92% |

---

## 👩‍💻 Author

**Hema Sravani** - [GitHub](https://github.com/hemasravani21)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- PlantVillage Dataset contributors
- Open-Meteo for free weather API
- TensorFlow and Flask communities
