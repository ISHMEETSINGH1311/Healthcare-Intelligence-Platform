from pydantic import BaseModel

class PredictionRequest(BaseModel):
    patient_age: int
    gender: str
    drug: str
    duration_days: int