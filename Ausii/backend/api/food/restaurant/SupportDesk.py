from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/6512", tags=["Food - Restaurant Support Desk"])

class SupportDeskModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_supportdesk_data():
    """Endpoint for Food Restaurant Support Desk"""
    return {
        "id": "6512",
        "action": "Support Desk",
        "role": "Restaurant",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_supportdesk_record(data: dict):
    return {"status": "success", "message": "Support Desk updated", "data": data}
