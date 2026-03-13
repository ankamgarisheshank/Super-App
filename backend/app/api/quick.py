from fastapi import APIRouter
from typing import List
from app.models.domain import QuickProduct

router = APIRouter()

@router.get("/products/search", response_model=List[QuickProduct])
async def search_products(query: str, lat: float, lng: float):
    # TODO: Implement ML search ranking and stock checking in nearby dark stores
    return [
        {
            "_id": "q_1",
            "store_id": "store_city_1",
            "name": "Fresh Milk",
            "unit": "1L",
            "price": 60.0,
            "discount_price": 55.0,
            "stock": 50,
            "image_url": "https://images.unsplash.com/photo-1563636619-e9107da5a165"
        }
    ]
