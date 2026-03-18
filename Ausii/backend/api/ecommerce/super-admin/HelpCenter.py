from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/1021", tags=["Ecommerce - Super-Admin Help Center"])

class HelpCenterModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_helpcenter_data():
    """Endpoint for Ecommerce Super-Admin Help Center"""
    return {
        "id": "1021",
        "action": "Help Center",
        "role": "Super-Admin",
        "module": "Ecommerce",
        "active": True
    }

@router.post("/")
async def update_helpcenter_record(data: dict):
    return {"status": "success", "message": "Help Center updated", "data": data}
