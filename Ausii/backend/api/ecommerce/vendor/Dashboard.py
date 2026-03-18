from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/8558", tags=["Ecommerce - Vendor Dashboard"])

class DashboardModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_dashboard_data():
    """Endpoint for Ecommerce Vendor Dashboard"""
    return {
        "id": "8558",
        "action": "Dashboard",
        "role": "Vendor",
        "module": "Ecommerce",
        "active": True
    }

@router.post("/")
async def update_dashboard_record(data: dict):
    return {"status": "success", "message": "Dashboard updated", "data": data}
