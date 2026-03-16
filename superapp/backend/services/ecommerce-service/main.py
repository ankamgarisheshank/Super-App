from fastapi import FastAPI, HTTPException, Depends
from typing import List, Optional
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="SuperApp E-Commerce & Quick Commerce Service", version="1.0.0")

class InventoryCheck(BaseModel):
    product_id: str
    store_id: str
    quantity: int

@app.get("/products/search")
async def search_products(q: str, type: str = "standard"):
    # Mock search logic
    return [
        {"id": "p1", "name": "Apple iPhone 15", "type": "standard", "price": 999},
        {"id": "p2", "name": "Fresh Milk 1L", "type": "quick", "price": 2, "eta": "10 mins"}
    ]

@app.get("/dark-stores/{store_id}/inventory")
async def get_store_inventory(store_id: str):
    return [
        {"product_id": "p2", "stock": 50, "shelf": "A-12"},
        {"product_id": "p3", "stock": 10, "shelf": "B-05"}
    ]

@app.post("/orders/process")
async def process_order(order_data: dict):
    # Determine if it's Quick Commerce or Standard
    is_quick = order_data.get("delivery_type") == "quick"
    
    if is_quick:
        # Check dark store proximity and stock
        return {"status": "assigned_to_dark_store", "order_id": "QC12345", "eta": "12 mins"}
    else:
        # Standard warehouse fulfillment
        return {"status": "processing", "order_id": "EC98765", "estimated_delivery": "2 days"}

@app.get("/coupons/validate")
async def validate_coupon(code: str, user_id: str, cart_value: float):
    if code == "SUPER10":
        return {"valid": True, "discount": 0.10, "message": "10% discount applied"}
    raise HTTPException(status_code=400, detail="Invalid or expired coupon")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8003)
