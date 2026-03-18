from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/6169", tags=["Food - Restaurant Order Monitor"])

class OrderMonitorModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_ordermonitor_data():
    """Endpoint for Food Restaurant Order Monitor"""
    return {
        "id": "6169",
        "action": "Order Monitor",
        "role": "Restaurant",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_ordermonitor_record(data: dict):
    return {"status": "success", "message": "Order Monitor updated", "data": data}
