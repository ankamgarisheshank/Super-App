from fastapi import FastAPI, HTTPException
from typing import List, Optional

app = FastAPI(title="SuperApp Food Delivery Service", version="1.0.0")

# Sample Data
RESTAURANTS = [
    {"id": "res1", "name": "Pizza Palace", "cuisine": "Italian", "rating": 4.5},
    {"id": "res2", "name": "Sushi Zen", "cuisine": "Japanese", "rating": 4.8},
    {"id": "res3", "name": "Burger Barn", "cuisine": "American", "rating": 4.2},
]

@app.get("/restaurants")
async def get_restaurants(cuisine: Optional[str] = None):
    if cuisine:
        return [r for r in RESTAURANTS if r["cuisine"].lower() == cuisine.lower()]
    return RESTAURANTS

@app.get("/restaurants/{restaurant_id}")
async def get_restaurant(restaurant_id: str):
    res = next((r for r in RESTAURANTS if r["id"] == restaurant_id), None)
    if not res:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return res

@app.get("/health")
async def health_check():
    return {"status": "up"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8004)
