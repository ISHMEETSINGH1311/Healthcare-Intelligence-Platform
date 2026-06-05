from pydantic import BaseModel

class VisitCreate(BaseModel):
    patient_name: str
    visit_date: str
    doctor: str
    diagnosis: str
    notes: str