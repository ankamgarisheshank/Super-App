from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/8266", tags=["Food - Admin Regional Config"])

class RegionalConfigModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_regionalconfig_data():
    """Endpoint for Food Admin Regional Config"""
    return {
        "id": "8266",
        "action": "Regional Config",
        "role": "Admin",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_regionalconfig_record(data: dict):
    return {"status": "success", "message": "Regional Config updated", "data": data}
