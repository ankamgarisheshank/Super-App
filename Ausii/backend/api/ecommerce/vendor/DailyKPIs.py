from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/96", tags=["E-commerce - Daily KPIs"])

class DailyKPIsModel(BaseModel):
    id: str
    status: str
    metadata: dict

@router.get("/")
async def get_DailyKPIs_data():
    """Endpoint for E-commerce Daily KPIs"""
    return {
        "id": "96",
        "name": "Daily KPIs",
        "module": "ecommerce",
        "active": True
    }

@router.post("/")
async def create_DailyKPIs_record(data: dict):
    return {"status": "success", "message": "Daily KPIs updated", "data": data}
