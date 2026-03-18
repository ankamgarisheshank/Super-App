from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.ecommerce.admin.index import router as ecommerce_router
from backend.api.essential.admin.index import router as essential_router
from backend.api.food.admin.index import router as food_router
from backend.api.ride.admin.index import router as ride_router
from backend.api.medical.admin.index import router as medical_router

app = FastAPI(title="SuperApp Product Suite API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "online", "message": "SuperApp Infrastructure Active"}

# Include Routes
app.include_router(ecommerce_router, prefix='/ecommerce')
app.include_router(essential_router, prefix='/essential')
app.include_router(food_router, prefix='/food')
app.include_router(ride_router, prefix='/ride')
app.include_router(medical_router, prefix='/medical')
