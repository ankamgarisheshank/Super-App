from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/4134", tags=["Ride - Admin Safety Center"])

class SafetyCenterModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_safetycenter_data():
    """Endpoint for Ride Admin Safety Center"""
    return {
        "id": "4134",
        "action": "Safety Center",
        "role": "Admin",
        "module": "Ride",
        "active": True
    }

@router.post("/")
async def update_safetycenter_record(data: dict):
    return {"status": "success", "message": "Safety Center updated", "data": data}
