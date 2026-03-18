from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/111", tags=["E-commerce - Staff Roles"])

class StaffRolesModel(BaseModel):
    id: str
    status: str
    metadata: dict

@router.get("/")
async def get_StaffRoles_data():
    """Endpoint for E-commerce Staff Roles"""
    return {
        "id": "111",
        "name": "Staff Roles",
        "module": "ecommerce",
        "active": True
    }

@router.post("/")
async def create_StaffRoles_record(data: dict):
    return {"status": "success", "message": "Staff Roles updated", "data": data}
