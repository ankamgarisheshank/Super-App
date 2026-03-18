from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/9599", tags=["Food - Admin Merchant Approval"])

class MerchantApprovalModel(BaseModel):
    id: str
    status: str
    payload: dict

@router.get("/")
async def get_merchantapproval_data():
    """Endpoint for Food Admin Merchant Approval"""
    return {
        "id": "9599",
        "action": "Merchant Approval",
        "role": "Admin",
        "module": "Food",
        "active": True
    }

@router.post("/")
async def update_merchantapproval_record(data: dict):
    return {"status": "success", "message": "Merchant Approval updated", "data": data}
