from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/5732", tags=["Food - Admin Dashboard"])

class DashboardModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_dashboard_data():
    """Endpoint for Food Admin Dashboard"""
    return {
        "id": "5732",
        "action": "Dashboard",
        "role": "Admin",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_dashboard_record(data: dict):
    return {"status": "success", "message": "Dashboard updated", "data": data}
