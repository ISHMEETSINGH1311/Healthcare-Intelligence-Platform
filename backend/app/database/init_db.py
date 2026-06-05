from app.database.database import Base, engine
from app.models.case_report import CaseReport
from app.models.prediction_history import PredictionHistory
# Import models here
from app.models.user import User

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")