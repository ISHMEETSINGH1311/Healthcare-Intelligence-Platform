from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from app.database.database import Base


class PredictionHistory(Base):
    __tablename__ = "prediction_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    patient_age = Column(Integer)

    gender = Column(String)

    drug = Column(String)

    duration_days = Column(Integer)

    predicted_severity = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )