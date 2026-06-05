from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime

from datetime import datetime

from app.database.database import Base


class NationalAlert(Base):
    __tablename__ = "national_alerts"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    region = Column(
        String(100)
    )

    symptoms = Column(
        Text
    )

    alert_message = Column(
        Text
    )

    severity = Column(
        String(50)
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )