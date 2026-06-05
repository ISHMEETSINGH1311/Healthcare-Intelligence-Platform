from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.models.health_pass import HealthPass

from app.schemas.health_pass import (
    HealthPassCreate
)

router = APIRouter(
    prefix="/health-pass",
    tags=["Health Pass"]
)


@router.post("/create")
def create_health_pass(
    data: HealthPassCreate,
    db: Session = Depends(get_db)
):

    record = HealthPass(
        patient_name=data.patient_name,
        age=data.age,
        gender=data.gender,
        blood_group=data.blood_group,
        allergies=data.allergies,
        conditions=data.conditions,
        medications=data.medications,
        vaccinations=data.vaccinations,
        emergency_contact=data.emergency_contact
    )

    db.add(record)
    db.commit()

    return {
        "message":
        "Health Pass Created"
    }


@router.get("/all")
def get_health_passes(
    db: Session = Depends(get_db)
):

    return (
        db.query(
            HealthPass
        )
        .all()
    )
@router.get("/{patient_name}")
def get_patient_health_pass(
    patient_name: str,
    db: Session = Depends(get_db)
):

    patient = (
        db.query(HealthPass)
        .filter(
            HealthPass.patient_name == patient_name
        )
        .first()
    )

    if not patient:
        return {
            "message": "Patient Not Found"
        }

    return patient
@router.delete("/{id}")
def delete_health_pass(
    id: int,
    db: Session = Depends(get_db)
):

    record = (
        db.query(HealthPass)
        .filter(
            HealthPass.id == id
        )
        .first()
    )

    if not record:
        return {
            "message":
            "Record Not Found"
        }

    db.delete(record)
    db.commit()

    return {
        "message":
        "Deleted Successfully"
    }