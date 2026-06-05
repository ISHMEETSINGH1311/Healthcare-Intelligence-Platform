from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.models.national_alert import (
    NationalAlert
)

from app.schemas.national_alert import (
    NationalAlertCreate
)

router = APIRouter(
    prefix="/national-alerts",
    tags=["National Alerts"]
)


@router.post("/create")
def create_alert(
    data: NationalAlertCreate,
    db: Session = Depends(get_db)
):

    alert = NationalAlert(
        region=data.region,
        symptoms=data.symptoms,
        alert_message=data.alert_message,
        severity=data.severity
    )

    db.add(alert)

    db.commit()

    return {
        "message":
        "National Alert Created"
    }


@router.get("/all")
def get_alerts(
    db: Session = Depends(get_db)
):

    return (
        db.query(
            NationalAlert
        )
        .all()
    )