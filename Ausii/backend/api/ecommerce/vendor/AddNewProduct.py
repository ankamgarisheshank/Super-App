from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/100", tags=["E-commerce - Add New Product"])

class AddNewProductModel(BaseModel):
    id: str
    status: str
    metadata: dict

@router.get("/")
async def get_AddNewProduct_data():
    """Endpoint for E-commerce Add New Product"""
    return {
        "id": "100",
        "name": "Add New Product",
        "module": "ecommerce",
        "active": True
    }

@router.post("/")
async def create_AddNewProduct_record(data: dict):
    return {"status": "success", "message": "Add New Product updated", "data": data}
