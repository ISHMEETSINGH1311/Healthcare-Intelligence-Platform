from fastapi import FastAPI
from app.api.analytics import router as analytics_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.case_report import router as case_router
from app.api.user import router as user_router
from app.api.prediction import (
    router as prediction_router
)
from app.api.health_pass import (
    router as health_pass_router
)
from app.api.visit_timeline import (
    router as timeline_router
)
from app.api.clusters import (
    router as cluster_router
)
from app.api.research_finding import (
    router as research_finding_router
)
from app.api.national_alert import (
    router as national_alert_router
)
from app.api.cluster_investigation import (
    router as investigation_router
)
app = FastAPI(
    title="Healthcare Intelligence Platform"
)

app.include_router(user_router)
app.include_router(case_router)
app.include_router(timeline_router)
app.include_router(analytics_router)
app.include_router(health_pass_router)
app.include_router(
    prediction_router
)
app.include_router(
    cluster_router
)
app.include_router(
    research_finding_router
)
app.include_router(
    national_alert_router
)
app.include_router(
    investigation_router
)
@app.get("/")
def home():
    return {
        "message": "Healthcare Intelligence Platform API Running"
    }
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)