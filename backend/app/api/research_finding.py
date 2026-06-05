from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.models.research_finding import (
    ResearchFinding
)

from app.schemas.research_finding import (
    ResearchFindingCreate
)

router = APIRouter(
    prefix="/research-findings",
    tags=["Research Findings"]
)


@router.post("/create")
def create_finding(
    data: ResearchFindingCreate,
    db: Session = Depends(get_db)
):

    finding = ResearchFinding(
        cluster_region=data.cluster_region,
        symptoms=data.symptoms,
        finding=data.finding,
        recommendation=data.recommendation,
        researcher_name=data.researcher_name
    )

    db.add(finding)

    db.commit()

    return {
        "message":
        "Finding Submitted"
    }


@router.get("/all")
def get_findings(
    db: Session = Depends(get_db)
):

    return (
        db.query(
            ResearchFinding
        )
        .all()
    )