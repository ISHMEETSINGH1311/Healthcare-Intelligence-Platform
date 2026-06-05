from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.case_report import CaseReport
from app.schemas.case_report import CaseReportCreate

router = APIRouter(
    prefix="/cases",
    tags=["Case Reports"]
)

@router.post("/create")
def create_case(
    case: CaseReportCreate,
    db: Session = Depends(get_db)
):

    new_case = CaseReport(
        patient_age=case.patient_age,
        gender=case.gender,

        drug=case.drug,
        dosage=case.dosage,

        duration_days=case.duration_days,

        symptoms=case.symptoms,

        severity=case.severity,

        hospital=case.hospital,

        region=case.region,

        outcome=case.outcome,

        notes=case.notes
    )

    db.add(new_case)
    db.commit()
    db.refresh(new_case)

    return {
        "message": "Case report created",
        "case_id": new_case.id
    }


@router.get("/all")
def get_all_cases(
    db: Session = Depends(get_db)
):
    cases = db.query(CaseReport).all()

    return cases