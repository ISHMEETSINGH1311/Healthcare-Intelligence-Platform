from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.visit_timeline import VisitTimeline
from app.schemas.visit_timeline import VisitCreate

router = APIRouter(
    prefix="/timeline",
    tags=["Visit Timeline"]
)

@router.post("/create")
def create_visit(
    visit: VisitCreate,
    db: Session = Depends(get_db)
):

    record = VisitTimeline(
        patient_name=visit.patient_name,
        visit_date=visit.visit_date,
        doctor=visit.doctor,
        diagnosis=visit.diagnosis,
        notes=visit.notes
    )

    db.add(record)
    db.commit()

    return {
        "message": "Visit Added"
    }

@router.get("/all")
def get_visits(
    db: Session = Depends(get_db)
):
    return db.query(
        VisitTimeline
    ).all()
@router.delete("/{visit_id}")
def delete_visit(
    visit_id: int,
    db: Session = Depends(get_db)
):
    visit = (
        db.query(VisitTimeline)
        .filter(
            VisitTimeline.id == visit_id
        )
        .first()
    )

    if not visit:
        return {
            "message": "Visit Not Found"
        }

    db.delete(visit)
    db.commit()

    return {
        "message": "Visit Deleted"
    }
@router.get("/patient/{patient_name}")
def get_patient_visits(
    patient_name: str,
    db: Session = Depends(get_db)
):

    visits = (
        db.query(VisitTimeline)
        .filter(
            VisitTimeline.patient_name == patient_name
        )
        .all()
    )

    return visits