from fastapi import APIRouter, HTTPException
from typing import List
from app.models.domain import Restaurant, MenuItem, Order

router = APIRouter()

@router.get("/restaurants/nearby", response_model=List[Restaurant])
async def get_nearby_restaurants(lat: float, lng: float):
    # TODO: Implement ML-based ranking based on proximity and user history
    return [
        {
            "_id": "res_1",
            "name": "The Gourmet Kitchen",
            "cuisine": ["North Indian", "Chinese"],
            "rating": 4.5,
            "delivery_time_est": 25,
            "image_url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            "location": {"lat": lat, "lng": lng}
        },
        {
            "_id": "res_2",
            "name": "Burger King",
            "cuisine": ["Fast Food", "American"],
            "rating": 4.2,
            "delivery_time_est": 20,
            "image_url": "https://images.unsplash.com/photo-1552566626-52f8b828add9",
            "location": {"lat": lat, "lng": lng}
        }
    ]

@router.get("/restaurants/{restaurant_id}/menu", response_model=List[MenuItem])
async def get_restaurant_menu(restaurant_id: str):
    return [
        {
            "_id": "item_1",
            "restaurant_id": restaurant_id,
            "name": "Paneer Butter Masala",
            "description": "Creamy tomato based gravy with cottage cheese",
            "price": 350.0,
            "category": "Main Course",
            "is_veg": True,
            "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641"
        }
    ]

@router.post("/orders", response_model=Order)
async def create_order(order: Order):
    # TODO: Connect to MongoDB
    return order
