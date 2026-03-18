from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/144", tags=["Notifications"])

class NotificationsResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=NotificationsResponse)
async def get_Notifications_data():
    """
    Endpoint for Notifications (ID: 144)
    """
    return {
        "id": "144",
        "name": "Notifications",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_Notifications_record(data: dict):
    return {"message": "Notifications record created", "data": data}
