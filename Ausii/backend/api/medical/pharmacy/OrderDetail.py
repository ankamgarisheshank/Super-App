from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/135", tags=["Order Detail"])

class OrderDetailResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=OrderDetailResponse)
async def get_OrderDetail_data():
    """
    Endpoint for Order Detail (ID: 135)
    """
    return {
        "id": "135",
        "name": "Order Detail",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_OrderDetail_record(data: dict):
    return {"message": "Order Detail record created", "data": data}
