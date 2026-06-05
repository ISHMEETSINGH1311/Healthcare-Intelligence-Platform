from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.dependencies import get_db
from app.models.case_report import CaseReport

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/top-drugs")
def top_drugs(
    db: Session = Depends(get_db)
):

    results = (
        db.query(
            CaseReport.drug,
            func.count(CaseReport.id).label("count")
        )
        .group_by(CaseReport.drug)
        .all()
    )

    return [
        {
            "drug": drug,
            "count": count
        }
        for drug, count in results
    ]
@router.get("/total-cases")
def total_cases(
    db: Session = Depends(get_db)
):

    count = db.query(
        CaseReport
    ).count()

    return {
        "total_cases": count
    }
@router.get("/severity-distribution")
def severity_distribution(
    db: Session = Depends(get_db)
):

    results = (
        db.query(
            CaseReport.severity,
            func.count(CaseReport.id).label("count")
        )
        .group_by(
            CaseReport.severity
        )
        .all()
    )

    return [
        {
            "severity": severity,
            "count": count
        }
        for severity, count in results
    ]
@router.get("/high-risk-drugs")
def high_risk_drugs(
    db: Session = Depends(get_db)
):

    results = (
        db.query(
            CaseReport.drug,
            func.count(
                CaseReport.id
            ).label("count")
        )
        .filter(
            CaseReport.severity
            == "Severe"
        )
        .group_by(
            CaseReport.drug
        )
        .order_by(
            func.count(
                CaseReport.id
            ).desc()
        )
        .all()
    )

    return [
        {
            "drug": drug,
            "severe_cases": count
        }
        for drug, count in results
    ]
@router.get("/cases-by-region")
def cases_by_region(
    db: Session = Depends(get_db)
):

    results = (
        db.query(
            CaseReport.region,
            func.count(
                CaseReport.id
            ).label("count")
        )
        .group_by(
            CaseReport.region
        )
        .all()
    )

    return [
        {
            "region": region,
            "count": count
        }
        for region, count in results
    ]
@router.get("/monthly-trends")
def monthly_trends(
    db: Session = Depends(get_db)
):

    results = (
        db.query(
            func.date(
                CaseReport.created_at
            ).label("date"),
            func.count(
                CaseReport.id
            ).label("count")
        )
        .group_by("date")
        .order_by("date")
        .all()
    )

    return [
        {
            "date": str(date),
            "count": count
        }
        for date, count in results
    ]