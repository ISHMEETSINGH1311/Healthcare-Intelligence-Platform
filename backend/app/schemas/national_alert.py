from pydantic import BaseModel


class NationalAlertCreate(
    BaseModel
):
    region: str

    symptoms: str

    alert_message: str

    severity: str