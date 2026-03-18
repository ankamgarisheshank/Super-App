from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/6159", tags=["Essential - Admin Admin Console"])

class AdminConsoleModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_adminconsole_data():
    """Endpoint for Essential Admin Admin Console"""
    return {
        "id": "6159",
        "action": "Admin Console",
        "role": "Admin",
        "module": "Essential",
        "active": True
    }

@router.post("/")
async def update_adminconsole_record(data: dict):
    return {"status": "success", "message": "Admin Console updated", "data": data}
