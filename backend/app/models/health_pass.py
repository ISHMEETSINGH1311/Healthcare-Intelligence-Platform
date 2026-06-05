from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.database import Base


class HealthPass(Base):
    __tablename__ = "health_pass"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    patient_name = Column(String)

    age = Column(Integer)

    gender = Column(String)

    blood_group = Column(String)

    allergies = Column(String)

    conditions = Column(String)

    medications = Column(String)

    vaccinations = Column(String)

    emergency_contact = Column(String)