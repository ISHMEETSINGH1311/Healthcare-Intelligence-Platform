from pydantic import BaseModel

class HealthPassCreate(BaseModel):
    patient_name: str
    age: int
    gender: str
    blood_group: str
    allergies: str
    conditions: str
    medications: str
    vaccinations: str
    emergency_contact: str