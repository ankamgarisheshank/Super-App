from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/2334", tags=["Medical - Admin Console"])

class ConsoleModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_console_data():
    """Endpoint for Medical Admin Console"""
    return {
        "id": "2334",
        "action": "Console",
        "role": "Admin",
        "module": "Medical",
        "active": True
    }

@router.post("/")
async def update_console_record(data: dict):
    return {"status": "success", "message": "Console updated", "data": data}
