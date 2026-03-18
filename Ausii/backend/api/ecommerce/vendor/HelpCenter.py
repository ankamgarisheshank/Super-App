from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/4527", tags=["Ecommerce - Vendor Help Center"])

class HelpCenterModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_helpcenter_data():
    """Endpoint for Ecommerce Vendor Help Center"""
    return {
        "id": "4527",
        "action": "Help Center",
        "role": "Vendor",
        "module": "Ecommerce",
        "active": True
    }

@router.post("/")
async def update_helpcenter_record(data: dict):
    return {"status": "success", "message": "Help Center updated", "data": data}
