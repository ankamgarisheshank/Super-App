from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/2371", tags=["Food - Admin Order Monitor"])

class OrderMonitorModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_ordermonitor_data():
    """Endpoint for Food Admin Order Monitor"""
    return {
        "id": "2371",
        "action": "Order Monitor",
        "role": "Admin",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_ordermonitor_record(data: dict):
    return {"status": "success", "message": "Order Monitor updated", "data": data}
