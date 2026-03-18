from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/194", tags=["Product Categories"])

class ProductCategoriesResponse(BaseModel):
    id: str
    name: str
    status: str
    metadata: dict

@router.get("/", response_model=ProductCategoriesResponse)
async def get_ProductCategories_data():
    """
    Endpoint for Product Categories (ID: 194)
    """
    return {
        "id": "194",
        "name": "Product Categories",
        "status": "success",
        "metadata": {"version": "1.0", "module": "Healthcare"}
    }

@router.post("/")
async def create_ProductCategories_record(data: dict):
    return {"message": "Product Categories record created", "data": data}
