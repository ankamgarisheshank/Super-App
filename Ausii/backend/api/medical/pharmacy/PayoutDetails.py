from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/160", tags=["Payout Details"])

class PayoutDetailsResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=PayoutDetailsResponse)
async def get_PayoutDetails_data():
    """
    Endpoint for Payout Details (ID: 160)
    """
    return {
        "id": "160",
        "name": "Payout Details",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_PayoutDetails_record(data: dict):
    return {"message": "Payout Details record created", "data": data}
