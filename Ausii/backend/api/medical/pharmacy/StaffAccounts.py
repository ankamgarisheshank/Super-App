from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/162", tags=["Staff Accounts"])

class StaffAccountsResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=StaffAccountsResponse)
async def get_StaffAccounts_data():
    """
    Endpoint for Staff Accounts (ID: 162)
    """
    return {
        "id": "162",
        "name": "Staff Accounts",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_StaffAccounts_record(data: dict):
    return {"message": "Staff Accounts record created", "data": data}
