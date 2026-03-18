from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/206", tags=["Refunds"])

class RefundsResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=RefundsResponse)
async def get_Refunds_data():
    """
    Endpoint for Refunds (ID: 206)
    """
    return {
        "id": "206",
        "name": "Refunds",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_Refunds_record(data: dict):
    return {"message": "Refunds record created", "data": data}
