from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/6170", tags=["Ecommerce - Admin Help Center"])

class HelpCenterModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_helpcenter_data():
    """Endpoint for Ecommerce Admin Help Center"""
    return {
        "id": "6170",
        "action": "Help Center",
        "role": "Admin",
        "module": "Ecommerce",
        "active": True
    }

@router.post("/")
async def update_helpcenter_record(data: dict):
    return {"status": "success", "message": "Help Center updated", "data": data}
