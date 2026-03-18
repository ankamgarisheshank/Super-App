from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/4057", tags=["Food - Restaurant Regional Config"])

class RegionalConfigModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_regionalconfig_data():
    """Endpoint for Food Restaurant Regional Config"""
    return {
        "id": "4057",
        "action": "Regional Config",
        "role": "Restaurant",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_regionalconfig_record(data: dict):
    return {"status": "success", "message": "Regional Config updated", "data": data}
