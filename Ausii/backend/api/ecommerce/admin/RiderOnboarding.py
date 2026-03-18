from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/152", tags=["E-commerce - Rider Onboarding"])

class RiderOnboardingModel(BaseModel):
    id: str
    status: str
    metadata: dict

@router.get("/")
async def get_RiderOnboarding_data():
    """Endpoint for E-commerce Rider Onboarding"""
    return {
        "id": "152",
        "name": "Rider Onboarding",
        "module": "ecommerce",
        "active": True
    }

@router.post("/")
async def create_RiderOnboarding_record(data: dict):
    return {"status": "success", "message": "Rider Onboarding updated", "data": data}
