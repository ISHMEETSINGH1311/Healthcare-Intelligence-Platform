import pandas as pd
import joblib
import os
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load Dataset
df = pd.read_csv(
    "../data/drug_safety_dataset.csv"
)

print("\nDataset Loaded\n")

# Encode Gender
gender_encoder = LabelEncoder()
df["gender"] = gender_encoder.fit_transform(
    df["gender"]
)

# Encode Drug
drug_encoder = LabelEncoder()
df["drug"] = drug_encoder.fit_transform(
    df["drug"]
)

# Encode Severity (Target)
severity_encoder = LabelEncoder()
df["severity"] = severity_encoder.fit_transform(
    df["severity"]
)

# Features
X = df[
    [
        "patient_age",
        "gender",
        "drug",
        "duration_days"
    ]
]

# Target
y = df["severity"]

# Split
X_train, X_test, y_train, y_test = (
    train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )
)

# Train Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

# Predict
predictions = model.predict(
    X_test
)

# Accuracy
accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    f"\nAccuracy: {accuracy:.2f}"
)
# Create models folder if needed
os.makedirs("../models", exist_ok=True)

# Save model
joblib.dump(
    model,
    "../models/risk_model.pkl"
)

# Save encoders
joblib.dump(
    gender_encoder,
    "../models/gender_encoder.pkl"
)

joblib.dump(
    drug_encoder,
    "../models/drug_encoder.pkl"
)

joblib.dump(
    severity_encoder,
    "../models/severity_encoder.pkl"
)

print("\nModel Saved Successfully")