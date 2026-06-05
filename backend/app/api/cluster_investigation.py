from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.models.cluster_investigation import (
    ClusterInvestigation
)

router = APIRouter(
    prefix="/investigations",
    tags=["Cluster Investigations"]
)


@router.post("/create")
def create_investigation(
    region: str,
    symptoms: str,
    cases: int,
    db: Session = Depends(get_db)
):

    investigation = ClusterInvestigation(
        region=region,
        symptoms=symptoms,
        cases=cases
    )

    db.add(investigation)

    db.commit()

    return {
        "message":
        "Investigation Created"
    }


@router.get("/all")
def get_investigations(
    db: Session = Depends(get_db)
):

    return (
        db.query(
            ClusterInvestigation
        )
        .all()
    )


@router.put("/start/{investigation_id}")
def start_investigation(
    investigation_id: int,
    db: Session = Depends(get_db)
):

    investigation = (
        db.query(
            ClusterInvestigation
        )
        .filter(
            ClusterInvestigation.id
            == investigation_id
        )
        .first()
    )

    if not investigation:
        raise HTTPException(
            status_code=404,
            detail="Investigation Not Found"
        )

    investigation.status = (
        "Under Review"
    )

    db.commit()

    return {
        "message":
        "Investigation Started"
    }


@router.put("/complete/{investigation_id}")
def complete_investigation(
    investigation_id: int,
    db: Session = Depends(get_db)
):

    investigation = (
        db.query(
            ClusterInvestigation
        )
        .filter(
            ClusterInvestigation.id
            == investigation_id
        )
        .first()
    )

    if not investigation:
        raise HTTPException(
            status_code=404,
            detail="Investigation Not Found"
        )

    investigation.status = (
        "Completed"
    )

    db.commit()

    return {
        "message":
        "Investigation Completed"
    }