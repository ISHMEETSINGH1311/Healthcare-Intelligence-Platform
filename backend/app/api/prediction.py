from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import joblib

from app.database.dependencies import get_db
from app.models.prediction_history import PredictionHistory
from app.schemas.prediction import PredictionRequest

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)

# Load Model
model = joblib.load(
    "ml/models/risk_model.pkl"
)

gender_encoder = joblib.load(
    "ml/models/gender_encoder.pkl"
)

drug_encoder = joblib.load(
    "ml/models/drug_encoder.pkl"
)

severity_encoder = joblib.load(
    "ml/models/severity_encoder.pkl"
)


@router.post("/predict")
def predict_risk(
    data: PredictionRequest,
    db: Session = Depends(get_db)
):

    # Encode Inputs
    gender_encoded = (
        gender_encoder.transform(
            [data.gender]
        )[0]
    )

    drug_encoded = (
        drug_encoder.transform(
            [data.drug]
        )[0]
    )

    # Prediction
    prediction = model.predict(
        [[
            data.patient_age,
            gender_encoded,
            drug_encoded,
            data.duration_days
        ]]
    )

    # Confidence Score
    probabilities = model.predict_proba(
        [[
            data.patient_age,
            gender_encoded,
            drug_encoded,
            data.duration_days
        ]]
    )

    confidence = (
        max(probabilities[0]) * 100
    )

    # Decode Prediction
    severity = (
        severity_encoder
        .inverse_transform(
            prediction
        )[0]
    )

    # Save Prediction History
    history = PredictionHistory(
        patient_age=data.patient_age,
        gender=data.gender,
        drug=data.drug,
        duration_days=data.duration_days,
        predicted_severity=severity
    )

    db.add(history)
    db.commit()

    return {
        "predicted_severity": severity,
        "confidence": round(
            confidence,
            2
        )
    }


@router.get("/history")
def get_prediction_history(
    db: Session = Depends(get_db)
):
    history = (
        db.query(PredictionHistory)
        .order_by(
            PredictionHistory.id.desc()
        )
        .limit(10)
        .all()
    )

    return [
        {
            "id": item.id,
            "patient_age": item.patient_age,
            "gender": item.gender,
            "drug": item.drug,
            "duration_days": item.duration_days,
            "predicted_severity": item.predicted_severity,
            "created_at": item.created_at
        }
        for item in history
    ]