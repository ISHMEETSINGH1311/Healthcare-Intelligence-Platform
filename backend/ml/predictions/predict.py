import joblib

# Load Model
model = joblib.load(
    "../models/risk_model.pkl"
)

# Load Encoders
gender_encoder = joblib.load(
    "../models/gender_encoder.pkl"
)

drug_encoder = joblib.load(
    "../models/drug_encoder.pkl"
)

severity_encoder = joblib.load(
    "../models/severity_encoder.pkl"
)

# Sample Input
age = 65
gender = "Female"
drug = "Amoxicillin"
duration_days = 10

# Encode
gender_encoded = (
    gender_encoder.transform(
        [gender]
    )[0]
)

drug_encoded = (
    drug_encoder.transform(
        [drug]
    )[0]
)

# Predict
prediction = model.predict(
    [[
        age,
        gender_encoded,
        drug_encoded,
        duration_days
    ]]
)

# Decode
severity = (
    severity_encoder.inverse_transform(
        prediction
    )[0]
)

print(
    f"\nPredicted Severity: {severity}"
)