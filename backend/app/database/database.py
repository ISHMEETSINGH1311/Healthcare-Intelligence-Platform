from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL"
)

engine = create_engine(
    DATABASE_URL
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()

# IMPORT MODELS
from app.models.user import User
from app.models.case_report import CaseReport
from app.models.prediction_history import (
    PredictionHistory
)
from app.models.visit_timeline import (
    VisitTimeline
)
from app.models.health_pass import (
    HealthPass
)
from app.models.research_finding import (
    ResearchFinding
)
# IMPORT MODELS
from app.models.user import User
from app.models.case_report import CaseReport
from app.models.prediction_history import (
    PredictionHistory
)
from app.models.visit_timeline import (
    VisitTimeline
)
from app.models.health_pass import (
    HealthPass
)
from app.models.research_finding import (
    ResearchFinding
)
from app.models.national_alert import (
    NationalAlert
)
from app.models.cluster_investigation import (
    ClusterInvestigation
)
# CREATE TABLES
Base.metadata.create_all(
    bind=engine
)