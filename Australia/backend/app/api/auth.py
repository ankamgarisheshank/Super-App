from fastapi import APIRouter
from app.models.domain import User, UserRole

router = APIRouter()

@router.post("/login")
async def login(phone: str):
    return {"message": "OTP sent", "phone": phone}

@router.post("/verify-otp")
async def verify_otp(phone: str, otp: str):
    return {
        "access_token": "mock_token",
        "user": {
            "name": "Nivas",
            "role": UserRole.CUSTOMER,
            "phone": phone
        }
    }
