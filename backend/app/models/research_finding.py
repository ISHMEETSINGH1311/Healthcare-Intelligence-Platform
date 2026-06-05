from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime

from datetime import datetime

from app.database.database import Base


class ResearchFinding(Base):
    __tablename__ = "research_findings"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    cluster_region = Column(
        String(100)
    )

    symptoms = Column(
        Text
    )

    finding = Column(
        Text
    )

    recommendation = Column(
        Text
    )

    researcher_name = Column(
        String(100)
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )