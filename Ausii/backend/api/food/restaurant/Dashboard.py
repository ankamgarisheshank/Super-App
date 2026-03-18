from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/4220", tags=["Food - Restaurant Dashboard"])

class DashboardModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_dashboard_data():
    """Endpoint for Food Restaurant Dashboard"""
    return {
        "id": "4220",
        "action": "Dashboard",
        "role": "Restaurant",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_dashboard_record(data: dict):
    return {"status": "success", "message": "Dashboard updated", "data": data}
