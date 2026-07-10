/**
 * AgriGuard — Telugu / English i18n
 * Usage: add data-i18n="key" to any element.
 *        For inputs add data-i18n-placeholder="key".
 * Saves choice to localStorage['agriguard_lang'].
 */

const AGRIGUARD_TRANSLATIONS = {
  en: {
    /* ── Navbar ── */
    nav_brand: 'AgriGuard',
    nav_welcome: 'Welcome, ',
    nav_subtitle: 'Disease Outbreak Prediction System',
    nav_profile: 'Profile',
    nav_history: 'History',
    nav_logout: 'Logout',
    nav_lang_toggle: 'తెలుగు',

    /* ── Welcome Banner ── */
    banner_title: '🌱 Disease Outbreak Prediction System',
    banner_desc: 'Upload leaf images to predict disease outbreaks, associated pests, and get early warning timelines',
    banner_badge: 'Early warning up to 30 days in advance',

    /* ── Info Banner ── */
    info_how: 'How it works:',
    info_desc: 'Upload multiple leaf images from different plants. Our AI analyzes disease patterns and predicts when an outbreak might occur, how severe it could be, and recommends preventive actions.',

    /* ── SMS / Email Notification Cards ── */
    sms_active: 'SMS Notifications Active',
    sms_receive: "You'll receive outbreak alerts and predictions on your mobile",
    sms_update: 'Update',
    sms_get_alert: 'Get outbreak alerts via SMS',
    sms_no_phone: 'Phone Number Not Set',
    sms_add_phone: 'Add your mobile number to receive outbreak alerts and predictions',
    sms_add_btn: 'Add Phone Number',
    email_active: 'Email Notifications Active',
    email_receive: "You'll receive crop analysis reports and outbreak alerts via email",
    email_get_alert: 'Get alerts via Email',

    /* ── Quick Stats ── */
    stat_total: 'Total Analyses',
    stat_diseases: 'Diseases Detected',
    stat_high_risk: 'High Risk Outbreaks',
    stat_month: 'This Month',

    /* ── Prediction Form ── */
    form_title: 'Disease Outbreak Prediction',
    lbl_location: 'Location',
    ph_location: 'Enter farm location (e.g., Punjab, India)',
    hint_location: 'Enter city, state, or region for localized recommendations',
    lbl_crop: 'Crop Type',
    ph_crop: '-- Select crop type --',
    hint_crop: 'Select your crop to see pest recommendations instantly',
    lbl_pests: 'Common Pests',
    hint_pests: '⚠ These pests commonly affect this crop — watch out!',
    lbl_rec_pests: 'Recommended Pests',
    hint_rec_pests: 'These pests are commonly associated with the selected crop in your region.',
    lbl_rel_pred: 'Related Previous Predictions',
    lbl_upload: 'Upload Leaf Images',
    upload_required: '*Required',
    upload_drop: 'Drop your leaf images here',
    upload_types: 'JPG, PNG, or WebP • Max 5MB each',
    upload_hint: 'Upload 1-10 images from different plants for better accuracy',
    upload_multi: 'Multiple images from different plants improve outbreak prediction accuracy',

    /* ── Analysis Settings ── */
    settings_title: 'Outbreak Prediction Settings',
    sms_alert_chk: 'Send outbreak alert via SMS',
    email_alert_chk: 'Send outbreak alert via Email',
    aggregate_chk: 'Aggregate results from multiple images',
    aggregate_hint: 'Combines analysis from all leaf images for more accurate outbreak prediction',
    no_phone_set: 'No phone number set',

    /* ── Submit Buttons ── */
    btn_predict: 'Predict Disease Outbreak',
    btn_reset: 'Reset',

    /* ── Recent Predictions ── */
    recent_title: 'Recent Outbreak Predictions',
    recent_view_all: 'View All',
    days_outbreak: 'days to outbreak',
    no_preds: 'No outbreak predictions yet',
    no_preds_hint: 'Upload leaf images above to get your first disease outbreak prediction!',
    details_btn: 'Details',
    sev_risk: 'RISK',

    /* ── PDF Report Banner ── */
    report_title: 'AgriGuard vs Previous Models — Full Comparison Report',
    report_desc: 'Download a professional research-grade PDF with abstract, bar charts, radar graph, system architecture diagram, and full metric comparison table.',
    report_btn: 'Download PDF Report',

    /* ── Outbreak Chart ── */
    chart_title: 'Pest & Disease Outbreak — Spread Timeline by Crop',
    chart_desc: '7-day disease & pest spread simulation per crop — click a crop in the legend to show/hide it.',
    chart_solid: 'Disease % per crop (solid)',
    chart_dashed: 'Pest % per crop (dashed)',
    chart_threshold: 'HIGH / CRITICAL threshold (70%)',
    chart_hc_point: 'HIGH / CRITICAL point',
    chart_no_data: 'No prediction data yet',
    chart_no_hint: 'Upload leaf images above to see your outbreak chart!',

    /* ── Feature Cards ── */
    feat_disease: 'Disease Detection',
    feat_disease_d: 'Identify 20+ crop diseases from leaf images with 95% accuracy using advanced image analysis.',
    feat_disease_s: 'Early Blight, Late Blight, Powdery Mildew, Rust, and more',
    feat_timeline: 'Outbreak Timeline',
    feat_timeline_d: 'Know exactly when a disease outbreak will occur - from 3 to 30 days in advance.',
    feat_timeline_s: "Plan preventive actions before it's too late",
    feat_severity: 'Severity Prediction',
    feat_severity_d: 'Understand how severe the outbreak will be - LOW, MODERATE, HIGH, or CRITICAL.',
    feat_severity_s: 'Prioritize actions based on severity',
    feat_pest: 'Pest Association',
    feat_pest_d: 'Automatically predicts which pests are likely to appear based on the detected disease.',
    feat_pest_s: 'Aphids, Whiteflies, Caterpillars, and more',
    feat_treatment: 'Treatment Plans',
    feat_treatment_d: 'Get personalized organic and chemical treatment recommendations based on outbreak timing.',
    feat_treatment_s: 'Immediate, short-term, and preventive actions',
    feat_alerts: 'Outbreak Alerts',
    feat_alerts_d: 'Receive SMS alerts when an outbreak is imminent with days-to-action countdown.',
    feat_alerts_s: 'Never miss a critical window',

    /* ── History Page ── */
    hist_title: 'Prediction History',
    hist_back: 'Back to Dashboard',
    hist_no: 'No predictions yet',
    hist_no_hint: 'Make your first prediction from the dashboard.',
    hist_filter_all: 'All',
    hist_filter_low: 'Low Risk',
    hist_filter_mod: 'Moderate',
    hist_filter_high: 'High Risk',
    hist_search_ph: 'Search by crop, location, or disease...',

    /* ── Profile Page ── */
    prof_title: 'My Profile',
    prof_back: 'Back to Dashboard',
    prof_name: 'Full Name',
    prof_email: 'Email',
    prof_phone: 'Phone',
    prof_save: 'Save Changes',
    prof_change_pw: 'Change Password',
    prof_current_pw: 'Current Password',
    prof_new_pw: 'New Password',
    prof_confirm_pw: 'Confirm Password',

    /* ── Login Page ── */
    login_title: 'Sign In',
    login_email: 'Email Address',
    login_password: 'Password',
    login_btn: 'Sign In',
    login_no_acc: "Don't have an account?",
    login_signup: 'Sign Up',

    /* ── Signup Page ── */
    signup_title: 'Create Account',
    signup_name: 'Full Name',
    signup_email: 'Email Address',
    signup_phone: 'Phone Number',
    signup_password: 'Password',
    signup_btn: 'Create Account',
    signup_have_acc: 'Already have an account?',
    signup_login: 'Sign In',

    /* ── Result / Report Page ── */
    result_report_title: 'Disease Outbreak Analysis Report',
    result_report_desc: 'Comprehensive analysis based on leaf images',
    result_images_analyzed: 'Images Analyzed',
    result_multi_agg: 'Multi-Image Aggregation',

    result_stat_disease: 'Primary Disease',
    result_stat_pest: 'Associated Pest',
    result_stat_risk: 'Overall Risk',
    result_stat_days: 'Days to Critical',

    result_card_disease: 'Disease Analysis',
    result_card_risk: 'Risk Assessment',
    result_card_pest: 'Pest Analysis',
    result_card_timeline: 'Risk Progression Timeline',
    result_card_recs: 'Treatment Recommendations',
    result_card_images: 'Analyzed Leaf Images',

    result_det_confidence: 'Detection Confidence',
    result_disease_risk_lbl: 'Disease Risk Level',
    result_confidence_score: 'Confidence Score',
    result_accurate: '% Accurate',

    result_risk_lbl: 'RISK',
    result_until_critical: 'Until Critical Stage',
    result_take_action: 'Take action within',
    result_days_prevent: 'days to prevent crop loss',

    result_pest_risk_lbl: 'Pest Risk Level:',
    result_conf_lbl: 'Confidence:',

    result_day_prefix: 'Day',
    result_critical_day: 'Critical Day: Day',
    result_take_preventive: 'Risk becomes CRITICAL. Take preventive action before this day.',

    result_critical_alert: '🚨 CRITICAL DAMAGE ALERT',
    result_irreversible: 'This Crop is Irreversibly Damaged',
    result_no_treatment: 'The level of disease infection and spread has reached a point where no treatment or suggestion can reverse the damage. The crop has been completely compromised — further cultivation of this batch is not viable.',
    result_risk_level: 'Risk Level',
    result_days_remaining: 'Days Remaining',
    result_disease_lbl: 'Disease',
    result_brown_area: 'Brown Area',
    result_what_to_do: '🔴 What You Should Do Now:',
    result_remove_plants: 'Remove all infected plants immediately.',
    result_remove_plants_d: 'Do not leave them in the field — they will spread disease to healthy plants nearby.',
    result_quarantine: 'Quarantine the affected area.',
    result_quarantine_d: 'Prevent movement of tools, water, or people from the infected zone to healthy areas.',
    result_disinfect: 'Disinfect all farm equipment.',
    result_disinfect_d: 'Use bleach solution or approved disinfectants before using on healthy plants.',
    result_consult: 'Consult agricultural authorities.',
    result_consult_d: 'For severe outbreaks, contact your nearest agriculture extension office for emergency assistance.',

    result_back_dash: 'Back to Dashboard',
    result_download_pdf: 'Download PDF Report',
    result_new_analysis: 'New Analysis',
    result_view_history: 'View History',
    result_send_email: 'Send Report Email',
    result_send_doctor: 'Send to Doctor for Review',

    /* ── History Page Extended ── */
    hist_subtitle: 'Complete record of all your disease outbreak predictions',
    hist_export: 'Export',
    hist_export_json: 'JSON Format',
    hist_export_csv: 'CSV Format',
    hist_clear_all: 'Clear All',
    hist_stat_total: 'TOTAL ANALYSES',
    hist_stat_total_sub: 'All time predictions',
    hist_stat_diseases: 'DISEASES DETECTED',
    hist_stat_diseases_sub: 'Unique diseases',
    hist_stat_high_risk: 'HIGH RISK OUTBREAKS',
    hist_stat_high_risk_sub: 'Critical attention needed',
    hist_stat_avg_days: 'AVG DAYS TO OUTBREAK',
    hist_stat_avg_days_sub: 'Average prediction window',
    hist_risk_high: 'HIGH RISK',
    hist_risk_moderate: 'MODERATE RISK',
    hist_risk_low: 'LOW RISK',
    hist_filter_title: 'Filter History',
    hist_lbl_date_range: 'DATE RANGE',
    hist_lbl_risk_level: 'RISK LEVEL',
    hist_lbl_crop_type: 'CROP TYPE',
    hist_lbl_disease: 'DISEASE',
    hist_opt_all_time: 'All Time',
    hist_opt_7days: 'Last 7 Days',
    hist_opt_30days: 'Last 30 Days',
    hist_opt_90days: 'Last 90 Days',
    hist_opt_all_risks: 'All Risks',
    hist_opt_low: 'Low',
    hist_opt_moderate: 'Moderate',
    hist_opt_high: 'High',
    hist_opt_critical: 'Critical',
    hist_btn_reset: 'Reset Filters',
    hist_btn_apply: 'Apply Filters',
    hist_entries_found: 'entries found',
    hist_col_date: 'Date',
    hist_col_location: 'Location',
    hist_col_crop: 'Crop',
    hist_col_disease: 'Disease',
    hist_col_risk: 'Risk Level',
    hist_col_confidence: 'Confidence',
    hist_col_outbreak_date: 'Outbreak Date',
    hist_col_days_left: 'Days Left',
    hist_col_status: 'Status',
    hist_col_actions: 'Actions',
    hist_no_hint2: "You haven't performed any crop analyses yet.",
    hist_analyze_first: 'Analyze Your First Crop',
    hist_no_match: 'No predictions match the current filters.',
    hist_active_filters: 'Active filters:',

    /* ── Profile Page Extended ── */
    prof_personal_info: 'Personal Information',
    prof_private: 'Private',
    prof_email_addr: 'Email Address',
    prof_phone_num: 'Phone Number',
    prof_farm_type: 'Farm Type',
    prof_member_since: 'Member Since',
    prof_sms_notif: 'SMS Notifications',
    prof_edit_info: 'Edit Information',
    prof_first_name: 'First Name',
    prof_last_name: 'Last Name',
    prof_cancel: 'Cancel',
    prof_recent_activity: 'Recent Activity',
    prof_no_activity: 'No recent activity',
    prof_no_activity_hint: 'Start analyzing your crops to see activity here',
    prof_chart_disease: 'Disease Distribution',
    prof_chart_risk: 'Risk Level Analysis',
    prof_chart_monthly: 'Monthly Analysis',
    prof_recent_notif: 'Recent Notifications',
    prof_notif_new: 'New',
    prof_no_notif: 'No notifications yet',
    prof_stat_pests: 'Pests Found',

    /* ── Prediction Risk Labels ── */
    risk_low: 'LOW',
    risk_moderate: 'MODERATE',
    risk_high: 'HIGH',
    risk_critical: 'CRITICAL',
    status_active: 'Active',
    status_monitoring: 'Monitoring',
    status_critical_status: 'Critical',
    status_resolved: 'Resolved',
    days_label: 'days',
  },

  te: {
    /* ── Navbar ── */
    nav_brand: 'అగ్రిగార్డ్',
    nav_welcome: 'స్వాగతం, ',
    nav_subtitle: 'వ్యాధి వ్యాప్తి అంచనా వ్యవస్థ',
    nav_profile: 'ప్రొఫైల్',
    nav_history: 'చరిత్ర',
    nav_logout: 'లాగ్అవుట్',
    nav_lang_toggle: 'English',

    /* ── Welcome Banner ── */
    banner_title: '🌱 వ్యాధి వ్యాప్తి అంచనా వ్యవస్థ',
    banner_desc: 'వ్యాధి వ్యాప్తులను అంచనా వేయడానికి ఆకు చిత్రాలను అప్‌లోడ్ చేయండి, సంబంధిత తెగులు మరియు ముందస్తు హెచ్చరిక గడువులను పొందండి',
    banner_badge: '30 రోజుల వరకు ముందుగా హెచ్చరిక',

    /* ── Info Banner ── */
    info_how: 'ఇది ఎలా పని చేస్తుంది:',
    info_desc: 'వేర్వేరు మొక్కల నుండి బహుళ ఆకు చిత్రాలను అప్‌లోడ్ చేయండి. మా AI వ్యాధి నమూనాలను విశ్లేషిస్తుంది మరియు వ్యాప్తి ఎప్పుడు సంభవించవచ్చో, ఎంత తీవ్రంగా ఉంటుందో అంచనా వేసి నివారణ చర్యలను సూచిస్తుంది.',

    /* ── SMS / Email Notification Cards ── */
    sms_active: 'SMS నోటిఫికేషన్‌లు సక్రియంగా ఉన్నాయి',
    sms_receive: 'మీ మొబైల్‌లో వ్యాప్తి హెచ్చరికలు మరియు అంచనాలు అందుతాయి',
    sms_update: 'నవీకరించు',
    sms_get_alert: 'SMS ద్వారా వ్యాప్తి హెచ్చరికలు పొందండి',
    sms_no_phone: 'ఫోన్ నంబర్ సెట్ చేయబడలేదు',
    sms_add_phone: 'వ్యాప్తి హెచ్చరికలు మరియు అంచనాలు స్వీకరించడానికి మీ మొబైల్ నంబర్ జోడించండి',
    sms_add_btn: 'ఫోన్ నంబర్ జోడించండి',
    email_active: 'ఇమెయిల్ నోటిఫికేషన్‌లు సక్రియంగా ఉన్నాయి',
    email_receive: 'పంట విశ్లేషణ నివేదికలు మరియు వ్యాప్తి హెచ్చరికలు ఇమెయిల్ ద్వారా అందుతాయి',
    email_get_alert: 'ఇమెయిల్ ద్వారా హెచ్చరికలు పొందండి',

    /* ── Quick Stats ── */
    stat_total: 'మొత్తం విశ్లేషణలు',
    stat_diseases: 'గుర్తించిన వ్యాధులు',
    stat_high_risk: 'అధిక ప్రమాద వ్యాప్తులు',
    stat_month: 'ఈ నెల',

    /* ── Prediction Form ── */
    form_title: 'వ్యాధి వ్యాప్తి అంచనా',
    lbl_location: 'స్థానం',
    ph_location: 'వ్యవసాయ స్థానం నమోదు చేయండి (ఉదా: పంజాబ్, భారతదేశం)',
    hint_location: 'స్థానీయ సిఫారసుల కోసం నగరం, రాష్ట్రం లేదా ప్రాంతాన్ని నమోదు చేయండి',
    lbl_crop: 'పంట రకం',
    ph_crop: '-- పంట రకాన్ని ఎంచుకోండి --',
    hint_crop: 'తెగులు సిఫారసులు వెంటనే చూడటానికి మీ పంటను ఎంచుకోండి',
    lbl_pests: 'సాధారణ తెగుళ్ళు',
    hint_pests: '⚠ ఈ తెగుళ్ళు ఈ పంటను సాధారణంగా ప్రభావితం చేస్తాయి — జాగ్రత్తగా ఉండండి!',
    lbl_rec_pests: 'సూచించిన తెగుళ్ళు',
    hint_rec_pests: 'ఈ తెగుళ్ళు మీ ప్రాంతంలో ఎంచుకున్న పంటతో సాధారణంగా అనుబంధించబడ్డాయి.',
    lbl_rel_pred: 'సంబంధిత మునుపటి అంచనాలు',
    lbl_upload: 'ఆకు చిత్రాలు అప్‌లోడ్ చేయండి',
    upload_required: '*అవసరం',
    upload_drop: 'మీ ఆకు చిత్రాలను ఇక్కడ వదలండి',
    upload_types: 'JPG, PNG లేదా WebP • గరిష్టంగా 5MB',
    upload_hint: 'మెరుగైన ఖచ్చితత్వం కోసం వేర్వేరు మొక్కల నుండి 1-10 చిత్రాలు అప్‌లోడ్ చేయండి',
    upload_multi: 'వేర్వేరు మొక్కల నుండి బహుళ చిత్రాలు వ్యాప్తి అంచనా ఖచ్చితత్వాన్ని మెరుగుపరుస్తాయి',

    /* ── Analysis Settings ── */
    settings_title: 'వ్యాప్తి అంచనా సెట్టింగ్‌లు',
    sms_alert_chk: 'SMS ద్వారా వ్యాప్తి హెచ్చరిక పంపండి',
    email_alert_chk: 'ఇమెయిల్ ద్వారా వ్యాప్తి హెచ్చరిక పంపండి',
    aggregate_chk: 'బహుళ చిత్రాల ఫలితాలను కలపండి',
    aggregate_hint: 'మరింత ఖచ్చితమైన వ్యాప్తి అంచనా కోసం అన్ని ఆకు చిత్రాల విశ్లేషణను మిళితం చేస్తుంది',
    no_phone_set: 'ఫోన్ నంబర్ సెట్ చేయబడలేదు',

    /* ── Submit Buttons ── */
    btn_predict: 'వ్యాధి వ్యాప్తిని అంచనా వేయండి',
    btn_reset: 'రీసెట్',

    /* ── Recent Predictions ── */
    recent_title: 'ఇటీవలి వ్యాప్తి అంచనాలు',
    recent_view_all: 'అన్నీ చూడండి',
    days_outbreak: 'వ్యాప్తికి రోజులు',
    no_preds: 'ఇంకా అంచనాలు లేవు',
    no_preds_hint: 'మీ మొదటి వ్యాధి వ్యాప్తి అంచనా పొందడానికి పైన ఆకు చిత్రాలు అప్‌లోడ్ చేయండి!',
    details_btn: 'వివరాలు',
    sev_risk: 'ప్రమాదం',

    /* ── PDF Report Banner ── */
    report_title: 'అగ్రిగార్డ్ vs మునుపటి మోడళ్ళు — పూర్తి పోలిక నివేదిక',
    report_desc: 'అమూర్తం, బార్ చార్ట్‌లు, రాడార్ గ్రాఫ్, సిస్టమ్ ఆర్కిటెక్చర్ రేఖాచిత్రం మరియు పూర్తి మెట్రిక్ పోలిక పట్టికతో వృత్తిపరమైన PDF ని డౌన్‌లోడ్ చేయండి.',
    report_btn: 'PDF నివేదిక డౌన్‌లోడ్ చేయండి',

    /* ── Outbreak Chart ── */
    chart_title: 'తెగులు & వ్యాధి వ్యాప్తి — పంట వారీ వ్యాప్తి కాలక్రమం',
    chart_desc: 'పంట వారీ 7-రోజుల వ్యాధి & తెగులు వ్యాప్తి అనుకరణ — చూపించడానికి/దాచడానికి లెజెండ్‌లో పంటపై క్లిక్ చేయండి.',
    chart_solid: 'పంట వారీ వ్యాధి % (దృఢం)',
    chart_dashed: 'పంట వారీ తెగులు % (డాష్)',
    chart_threshold: 'అధిక / క్లిష్టం పరిమితి (70%)',
    chart_hc_point: 'అధిక / క్లిష్టం బిందువు',
    chart_no_data: 'ఇంకా అంచనా డేటా లేదు',
    chart_no_hint: 'మీ వ్యాప్తి చార్ట్ చూడటానికి పైన ఆకు చిత్రాలు అప్‌లోడ్ చేయండి!',

    /* ── Feature Cards ── */
    feat_disease: 'వ్యాధి గుర్తింపు',
    feat_disease_d: 'అధునాతన చిత్ర విశ్లేషణ ఉపయోగించి 95% ఖచ్చితత్వంతో ఆకు చిత్రాల నుండి 20+ పంట వ్యాధులను గుర్తించండి.',
    feat_disease_s: 'అర్లీ బ్లైట్, లేట్ బ్లైట్, పౌడరీ మిల్డ్యూ, తుప్పు మరియు మరిన్ని',
    feat_timeline: 'వ్యాప్తి కాలక్రమం',
    feat_timeline_d: 'వ్యాధి వ్యాప్తి ఎప్పుడు సంభవిస్తుందో ఖచ్చితంగా తెలుసుకోండి - 3 నుండి 30 రోజుల ముందుగా.',
    feat_timeline_s: 'చాలా ఆలస్యం కాకముందే నివారణ చర్యలు ప్లాన్ చేయండి',
    feat_severity: 'తీవ్రత అంచనా',
    feat_severity_d: 'వ్యాప్తి ఎంత తీవ్రంగా ఉంటుందో అర్థం చేసుకోండి - తక్కువ, మధ్యస్థ, అధిక లేదా క్లిష్టం.',
    feat_severity_s: 'తీవ్రత ఆధారంగా చర్యలకు ప్రాధాన్యత ఇవ్వండి',
    feat_pest: 'తెగులు అనుబంధం',
    feat_pest_d: 'గుర్తించిన వ్యాధి ఆధారంగా ఏ తెగుళ్ళు కనిపించే అవకాశం ఉందో స్వయంచాలకంగా అంచనా వేస్తుంది.',
    feat_pest_s: 'ఆఫిడ్‌లు, వైట్‌ఫ్లైలు, క్యాటర్‌పిల్లర్‌లు మరియు మరిన్ని',
    feat_treatment: 'చికిత్స ప్రణాళికలు',
    feat_treatment_d: 'వ్యాప్తి సమయం ఆధారంగా వ్యక్తిగతీకరించిన సేంద్రీయ మరియు రసాయన చికిత్స సిఫారసులు పొందండి.',
    feat_treatment_s: 'తక్షణ, స్వల్పకాలిక మరియు నివారణ చర్యలు',
    feat_alerts: 'వ్యాప్తి హెచ్చరికలు',
    feat_alerts_d: 'వ్యాప్తి సమీపించినప్పుడు చర్య కోసం రోజుల కౌంట్‌డౌన్‌తో SMS హెచ్చరికలు స్వీకరించండి.',
    feat_alerts_s: 'క్లిష్టమైన విండోను ఎప్పుడూ మిస్ చేయకండి',

    /* ── History Page ── */
    hist_title: 'అంచనా చరిత్ర',
    hist_back: 'డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు',
    hist_no: 'ఇంకా అంచనాలు లేవు',
    hist_no_hint: 'డాష్‌బోర్డ్ నుండి మీ మొదటి అంచనా చేయండి.',
    hist_filter_all: 'అన్నీ',
    hist_filter_low: 'తక్కువ ప్రమాదం',
    hist_filter_mod: 'మధ్యస్థ',
    hist_filter_high: 'అధిక ప్రమాదం',
    hist_search_ph: 'పంట, స్థానం లేదా వ్యాధి వారీ శోధించండి...',

    /* ── Profile Page ── */
    prof_title: 'నా ప్రొఫైల్',
    prof_back: 'డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు',
    prof_name: 'పూర్తి పేరు',
    prof_email: 'ఇమెయిల్',
    prof_phone: 'ఫోన్',
    prof_save: 'మార్పులు సేవ్ చేయండి',
    prof_change_pw: 'పాస్‌వర్డ్ మార్చండి',
    prof_current_pw: 'ప్రస్తుత పాస్‌వర్డ్',
    prof_new_pw: 'కొత్త పాస్‌వర్డ్',
    prof_confirm_pw: 'పాస్‌వర్డ్ నిర్ధారించండి',

    /* ── Login Page ── */
    login_title: 'సైన్ ఇన్',
    login_email: 'ఇమెయిల్ చిరునామా',
    login_password: 'పాస్‌వర్డ్',
    login_btn: 'సైన్ ఇన్',
    login_no_acc: 'ఖాతా లేదా?',
    login_signup: 'సైన్ అప్',

    /* ── Signup Page ── */
    signup_title: 'ఖాతా సృష్టించండి',
    signup_name: 'పూర్తి పేరు',
    signup_email: 'ఇమెయిల్ చిరునామా',
    signup_phone: 'ఫోన్ నంబర్',
    signup_password: 'పాస్‌వర్డ్',
    signup_btn: 'ఖాతా సృష్టించండి',
    signup_have_acc: 'ఇప్పటికే ఖాతా ఉందా?',
    signup_login: 'సైన్ ఇన్',

    /* ── Result / Report Page ── */
    result_report_title: 'వ్యాధి వ్యాప్తి విశ్లేషణ నివేదిక',
    result_report_desc: 'ఆకు చిత్రాల ఆధారంగా సమగ్ర విశ్లేషణ',
    result_images_analyzed: 'విశ్లేషించిన చిత్రాలు',
    result_multi_agg: 'బహుళ చిత్రాల సంకలనం',

    result_stat_disease: 'ప్రధాన వ్యాధి',
    result_stat_pest: 'సంబంధిత తెగులు',
    result_stat_risk: 'మొత్తం ప్రమాదం',
    result_stat_days: 'క్లిష్ట దశకు రోజులు',

    result_card_disease: 'వ్యాధి విశ్లేషణ',
    result_card_risk: 'ప్రమాద అంచనా',
    result_card_pest: 'తెగులు విశ్లేషణ',
    result_card_timeline: 'ప్రమాద పురోగతి కాలక్రమం',
    result_card_recs: 'చికిత్స సిఫారసులు',
    result_card_images: 'విశ్లేషించిన ఆకు చిత్రాలు',

    result_det_confidence: 'గుర్తింపు విశ్వాసం',
    result_disease_risk_lbl: 'వ్యాధి ప్రమాద స్థాయి',
    result_confidence_score: 'విశ్వాస స్కోరు',
    result_accurate: '% ఖచ్చితంగా',

    result_risk_lbl: 'ప్రమాదం',
    result_until_critical: 'క్లిష్ట దశ వరకు',
    result_take_action: 'లోపల చర్య తీసుకోండి',
    result_days_prevent: 'రోజుల్లో పంట నష్టాన్ని నివారించండి',

    result_pest_risk_lbl: 'తెగులు ప్రమాద స్థాయి:',
    result_conf_lbl: 'విశ్వాసం:',

    result_day_prefix: 'రోజు',
    result_critical_day: 'క్లిష్ట రోజు: రోజు',
    result_take_preventive: 'ప్రమాదం క్లిష్టంగా మారుతోంది. ఈ రోజుకు ముందే నివారణ చర్యలు తీసుకోండి.',

    result_critical_alert: '🚨 తీవ్రమైన నష్ట హెచ్చరిక',
    result_irreversible: 'ఈ పంట తిరిగి మారని నష్టానికి గురైంది',
    result_no_treatment: 'వ్యాధి సంక్రమణ మరియు వ్యాప్తి స్థాయి ఎంత తీవ్రంగా ఉందంటే ఏ చికిత్స లేదా సూచన నష్టాన్ని తిప్పికొనలేదు. పంట పూర్తిగా దెబ్బతింది — ఈ బ్యాచ్ సాగు కొనసాగించడం సాధ్యపడదు.',
    result_risk_level: 'ప్రమాద స్థాయి',
    result_days_remaining: 'మిగిలిన రోజులు',
    result_disease_lbl: 'వ్యాధి',
    result_brown_area: 'గోధుమ రంగు ప్రాంతం',
    result_what_to_do: '🔴 ఇప్పుడు ఏమి చేయాలి:',
    result_remove_plants: 'సోకిన మొక్కలను వెంటనే తొలగించండి.',
    result_remove_plants_d: 'వాటిని పొలంలో వదలకండి — అవి దగ్గరున్న ఆరోగ్యకరమైన మొక్కలకు వ్యాధిని వ్యాప్తి చేస్తాయి.',
    result_quarantine: 'దెబ్బతిన్న ప్రాంతాన్ని వేరు చేయండి.',
    result_quarantine_d: 'సోకిన ప్రాంతం నుండి ఆరోగ్యకరమైన ప్రాంతాలకు సాధనాలు, నీరు లేదా వ్యక్తుల రాకపోకలను నిరోధించండి.',
    result_disinfect: 'వ్యవసాయ పరికరాలను క్రిమి నాశనం చేయండి.',
    result_disinfect_d: 'ఆరోగ్యకరమైన మొక్కలపై ఉపయోగించే ముందు బ్లీచ్ ద్రావణం లేదా ఆమోదించబడిన క్రిమి నాశినులు ఉపయోగించండి.',
    result_consult: 'వ్యవసాయ అధికారులను సంప్రదించండి.',
    result_consult_d: 'తీవ్రమైన వ్యాప్తుల కోసం, అత్యవసర సహాయం కోసం మీ సమీప వ్యవసాయ విస్తరణ కార్యాలయాన్ని సంప్రదించండి.',

    result_back_dash: 'డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు',
    result_download_pdf: 'PDF నివేదిక డౌన్‌లోడ్ చేయండి',
    result_new_analysis: 'కొత్త విశ్లేషణ',
    result_view_history: 'చరిత్ర చూడండి',
    result_send_email: 'నివేదిక ఇమెయిల్ పంపండి',
    result_send_doctor: 'సమీక్ష కోసం డాక్టర్‌కు పంపండి',

    /* ── History Page Extended ── */
    hist_subtitle: 'మీ అన్ని వ్యాధి వ్యాప్తి అంచనాల పూర్తి రికార్డు',
    hist_export: 'ఎగుమతి',
    hist_export_json: 'JSON ఫార్మాట్',
    hist_export_csv: 'CSV ఫార్మాట్',
    hist_clear_all: 'అన్నీ తొలగించు',
    hist_stat_total: 'మొత్తం విశ్లేషణలు',
    hist_stat_total_sub: 'అన్ని కాల అంచనాలు',
    hist_stat_diseases: 'గుర్తించిన వ్యాధులు',
    hist_stat_diseases_sub: 'ప్రత్యేక వ్యాధులు',
    hist_stat_high_risk: 'అధిక ప్రమాద వ్యాప్తులు',
    hist_stat_high_risk_sub: 'క్లిష్టమైన శ్రద్ధ అవసరం',
    hist_stat_avg_days: 'వ్యాప్తికి సగటు రోజులు',
    hist_stat_avg_days_sub: 'సగటు అంచనా విండో',
    hist_risk_high: 'అధిక ప్రమాదం',
    hist_risk_moderate: 'మధ్యస్థ ప్రమాదం',
    hist_risk_low: 'తక్కువ ప్రమాదం',
    hist_filter_title: 'చరిత్ర ఫిల్టర్ చేయండి',
    hist_lbl_date_range: 'తేదీ పరిధి',
    hist_lbl_risk_level: 'ప్రమాద స్థాయి',
    hist_lbl_crop_type: 'పంట రకం',
    hist_lbl_disease: 'వ్యాధి',
    hist_opt_all_time: 'అన్ని కాలం',
    hist_opt_7days: 'చివరి 7 రోజులు',
    hist_opt_30days: 'చివరి 30 రోజులు',
    hist_opt_90days: 'చివరి 90 రోజులు',
    hist_opt_all_risks: 'అన్ని ప్రమాదాలు',
    hist_opt_low: 'తక్కువ',
    hist_opt_moderate: 'మధ్యస్థ',
    hist_opt_high: 'అధికం',
    hist_opt_critical: 'క్లిష్టం',
    hist_btn_reset: 'ఫిల్టర్‌లు రీసెట్',
    hist_btn_apply: 'ఫిల్టర్‌లు వర్తించు',
    hist_entries_found: 'ఎంట్రీలు కనుగొనబడ్డాయి',
    hist_col_date: 'తేదీ',
    hist_col_location: 'స్థానం',
    hist_col_crop: 'పంట',
    hist_col_disease: 'వ్యాధి',
    hist_col_risk: 'ప్రమాద స్థాయి',
    hist_col_confidence: 'విశ్వాసం',
    hist_col_outbreak_date: 'వ్యాప్తి తేదీ',
    hist_col_days_left: 'మిగిలిన రోజులు',
    hist_col_status: 'స్థితి',
    hist_col_actions: 'చర్యలు',
    hist_no_hint2: 'మీరు ఇంకా ఏ పంట విశ్లేషణ చేయలేదు.',
    hist_analyze_first: 'మీ మొదటి పంటను విశ్లేషించండి',
    hist_no_match: 'ప్రస్తుత ఫిల్టర్‌లకు అనుగుణంగా అంచనాలు లేవు.',
    hist_active_filters: 'సక్రియ ఫిల్టర్‌లు:',

    /* ── Profile Page Extended ── */
    prof_personal_info: 'వ్యక్తిగత సమాచారం',
    prof_private: 'ప్రైవేట్',
    prof_email_addr: 'ఇమెయిల్ చిరునామా',
    prof_phone_num: 'ఫోన్ నంబర్',
    prof_farm_type: 'వ్యవసాయ రకం',
    prof_member_since: 'సభ్యత్వం నుండి',
    prof_sms_notif: 'SMS నోటిఫికేషన్‌లు',
    prof_edit_info: 'సమాచారం సవరించండి',
    prof_first_name: 'మొదటి పేరు',
    prof_last_name: 'చివరి పేరు',
    prof_cancel: 'రద్దు చేయండి',
    prof_recent_activity: 'ఇటీవలి కార్యకలాపం',
    prof_no_activity: 'ఇటీవలి కార్యకలాపం లేదు',
    prof_no_activity_hint: 'కార్యకలాపం చూడటానికి మీ పంటలను విశ్లేషించడం ప్రారంభించండి',
    prof_chart_disease: 'వ్యాధి పంపిణీ',
    prof_chart_risk: 'ప్రమాద స్థాయి విశ్లేషణ',
    prof_chart_monthly: 'నెలవారీ విశ్లేషణ',
    prof_recent_notif: 'ఇటీవలి నోటిఫికేషన్‌లు',
    prof_notif_new: 'కొత్త',
    prof_no_notif: 'ఇంకా నోటిఫికేషన్‌లు లేవు',
    prof_stat_pests: 'కనుగొనిన తెగుళ్ళు',

    /* ── Prediction Risk Labels ── */
    risk_low: 'తక్కువ',
    risk_moderate: 'మధ్యస్థ',
    risk_high: 'అధికం',
    risk_critical: 'క్లిష్టం',
    status_active: 'సక్రియం',
    status_monitoring: 'పర్యవేక్షణ',
    status_critical_status: 'క్లిష్టం',
    status_resolved: 'పరిష్కరించబడింది',
    days_label: 'రోజులు',
  }
};

/* ── Core apply function ─────────────────────────────────────── */
function applyLanguage(lang) {
  if (!lang) lang = 'en';
  localStorage.setItem('agriguard_lang', lang);

  const t = AGRIGUARD_TRANSLATIONS[lang] || AGRIGUARD_TRANSLATIONS['en'];

  /* text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  /* title attributes */
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.setAttribute('title', t[key]);
  });

  /* update the toggle button label */
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.setAttribute('data-active-lang', lang);
    const enSpan = btn.querySelector('.lang-en');
    const teSpan = btn.querySelector('.lang-te');
    if (lang === 'en') {
      enSpan && (enSpan.style.fontWeight = '700');
      teSpan && (teSpan.style.fontWeight = '400');
      enSpan && (enSpan.style.opacity = '1');
      teSpan && (teSpan.style.opacity = '0.55');
    } else {
      teSpan && (teSpan.style.fontWeight = '700');
      enSpan && (enSpan.style.fontWeight = '400');
      teSpan && (teSpan.style.opacity = '1');
      enSpan && (enSpan.style.opacity = '0.55');
    }
  });
}

function toggleLanguage() {
  const current = localStorage.getItem('agriguard_lang') || 'en';
  applyLanguage(current === 'en' ? 'te' : 'en');
}

/* ── Auto-apply on every page load ──────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('agriguard_lang') || 'en';
  applyLanguage(saved);
});
