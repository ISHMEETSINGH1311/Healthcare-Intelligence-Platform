from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database.database import Base


class ClusterInvestigation(Base):
    __tablename__ = "cluster_investigations"

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

    cases = Column(
        Integer
    )

    status = Column(
        String(100),
        default="Pending Investigation"
    )

    finding = Column(
        Text,
        nullable=True
    )

    recommendation = Column(
        Text,
        nullable=True
    )

    researcher_name = Column(
        String(100),
        nullable=True
    )