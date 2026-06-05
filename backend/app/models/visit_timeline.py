from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.database import Base

class VisitTimeline(Base):
    __tablename__ = "visit_timeline"

    id = Column(Integer, primary_key=True)

    patient_name = Column(String)

    visit_date = Column(String)

    doctor = Column(String)

    diagnosis = Column(String)

    notes = Column(String)