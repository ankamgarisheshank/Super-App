from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, food, quick, ecom, services, admin

app = FastAPI(
    title="SuperApp Backend",
    description="Full-stack SuperApp with ML-driven features",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(food.router, prefix="/api/food", tags=["Food Delivery"])
app.include_router(quick.router, prefix="/api/quick", tags=["Quick Commerce"])
app.include_router(ecom.router, prefix="/api/ecom", tags=["E-commerce"])
app.include_router(services.router, prefix="/api/services", tags=["Services"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

@app.get("/")
async def root():
    return {"message": "Welcome to SuperApp API Gateway", "status": "Online"}
