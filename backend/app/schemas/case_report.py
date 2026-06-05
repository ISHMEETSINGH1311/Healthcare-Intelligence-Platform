from pydantic import BaseModel

class CaseReportCreate(BaseModel):
    patient_age: int
    gender: str

    drug: str
    dosage: str

    duration_days: int

    symptoms: str

    severity: str

    hospital: str

    region: str

    outcome: str

    notes: str