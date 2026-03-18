from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/952", tags=["Ecommerce - Admin Settings"])

class SettingsModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_settings_data():
    """Endpoint for Ecommerce Admin Settings"""
    return {
        "id": "952",
        "action": "Settings",
        "role": "Admin",
        "module": "Ecommerce",
        "active": True
    }

@router.post("/")
async def update_settings_record(data: dict):
    return {"status": "success", "message": "Settings updated", "data": data}
