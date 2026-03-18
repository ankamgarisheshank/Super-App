from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/9015", tags=["Medical - Doctor Console"])

class ConsoleModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_console_data():
    """Endpoint for Medical Doctor Console"""
    return {
        "id": "9015",
        "action": "Console",
        "role": "Doctor",
        "module": "Medical",
        "active": True
    }

@router.post("/")
async def update_console_record(data: dict):
    return {"status": "success", "message": "Console updated", "data": data}
