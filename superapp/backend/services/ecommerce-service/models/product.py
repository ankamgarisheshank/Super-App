# backend/services/ecommerce-service/models/product.py
from typing import Optional, List
from pydantic import BaseModel, Field
from datetime import datetime

class Product(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    description: str
    price: float
    category: str
    vendor_id: str
    stock_quantity: int
    images: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class Order(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    customer_id: str
    items: List[dict] # list of product_id and quantity
    total_amount: float
    status: str # pending, paid, shipped, delivered, cancelled
    shipping_address: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
