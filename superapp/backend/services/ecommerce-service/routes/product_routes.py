# backend/services/ecommerce-service/routes/product_routes.py
from fastapi import APIRouter, HTTPException
from typing import List
# from models.product import Product # Relative import path would depend on app structure

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=List[dict])
async def get_all_products():
    return [
        {"id": "1", "name": "Eco-friendly Bottle", "price": 25.0, "vendor_id": "v1"},
        {"id": "2", "name": "Wireless Headphones", "price": 150.0, "vendor_id": "v2"}
    ]

@router.post("/")
async def create_product(product: dict):
    return {"message": "Product created successfully", "product_id": "3"}

@router.get("/{product_id}")
async def get_product(product_id: str):
    return {"id": product_id, "name": "Sample Product", "price": 100.0}
