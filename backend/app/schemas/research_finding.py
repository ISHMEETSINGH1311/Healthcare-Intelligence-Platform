from pydantic import BaseModel


class ResearchFindingCreate(
    BaseModel
):
    cluster_region: str

    symptoms: str

    finding: str

    recommendation: str

    researcher_name: str