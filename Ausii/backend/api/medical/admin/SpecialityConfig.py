from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/196", tags=["Speciality Config"])

class SpecialityConfigResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=SpecialityConfigResponse)
async def get_SpecialityConfig_data():
    """
    Endpoint for Speciality Config (ID: 196)
    """
    return {
        "id": "196",
        "name": "Speciality Config",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_SpecialityConfig_record(data: dict):
    return {"message": "Speciality Config record created", "data": data}
