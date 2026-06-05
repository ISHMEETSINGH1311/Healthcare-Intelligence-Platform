from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime

from app.database.database import Base

class CaseReport(Base):
    __tablename__ = "case_reports"

    id = Column(Integer, primary_key=True, index=True)

    patient_age = Column(Integer)

    gender = Column(String(20))

    drug = Column(String(255))

    dosage = Column(String(100))

    duration_days = Column(Integer)

    symptoms = Column(Text)

    severity = Column(String(50))

    hospital = Column(String(255))

    region = Column(String(100))

    outcome = Column(String(100))

    notes = Column(Text)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )