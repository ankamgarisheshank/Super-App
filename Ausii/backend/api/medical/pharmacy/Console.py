from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/6758", tags=["Medical - Pharmacy Console"])

class ConsoleModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_console_data():
    """Endpoint for Medical Pharmacy Console"""
    return {
        "id": "6758",
        "action": "Console",
        "role": "Pharmacy",
        "module": "Medical",
        "active": True
    }

@router.post("/")
async def update_console_record(data: dict):
    return {"status": "success", "message": "Console updated", "data": data}
