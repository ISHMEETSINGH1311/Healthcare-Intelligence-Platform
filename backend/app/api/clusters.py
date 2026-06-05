from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.case_report import CaseReport

router = APIRouter(
    prefix="/clusters",
    tags=["Disease Clusters"]
)

@router.get("/all")
def get_clusters(
    db: Session = Depends(get_db)
):

    reports = (
        db.query(CaseReport)
        .all()
    )

    clusters = {}

    for report in reports:

        key = (
            report.region,
            report.symptoms
        )

        if key not in clusters:
            clusters[key] = 0

        clusters[key] += 1

    result = []

    for (
        region,
        symptoms
    ), count in clusters.items():

        if count >= 2:

            result.append({
                "region": region,
                "symptoms": symptoms,
                "cases": count
            })

    return result