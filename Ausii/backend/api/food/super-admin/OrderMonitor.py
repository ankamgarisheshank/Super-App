from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/4456", tags=["Food - Super-Admin Order Monitor"])

class OrderMonitorModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_ordermonitor_data():
    """Endpoint for Food Super-Admin Order Monitor"""
    return {
        "id": "4456",
        "action": "Order Monitor",
        "role": "Super-Admin",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_ordermonitor_record(data: dict):
    return {"status": "success", "message": "Order Monitor updated", "data": data}
