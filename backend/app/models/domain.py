from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum

class UserRole(str, Enum):
    CUSTOMER = "customer"
    PARTNER = "partner"
    RESTAURANT_ADMIN = "restaurant_admin"
    STORE_ADMIN = "store_admin"
    SUPER_ADMIN = "super_admin"

class Address(BaseModel):
    street: str
    city: str
    state: str
    pincode: str
    country: str = "India"
    lat: Optional[float] = None
    lng: Optional[float] = None
    tag: str = "Home" # Home, Work, Other

class User(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    email: EmailStr
    phone: str
    role: UserRole
    addresses: List[Address] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Food Module
class Restaurant(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    cuisine: List[str]
    rating: float = 0.0
    delivery_time_est: int # in minutes
    image_url: str
    is_active: bool = True
    location: Dict[str, Any]

class MenuItem(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    restaurant_id: str
    name: str
    description: str
    price: float
    category: str # Starter, Main, etc.
    is_veg: bool
    image_url: Optional[str] = None

# Quick Commerce
class Store(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    category: str
    location: Dict[str, Any]
    image_url: str

class QuickProduct(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    store_id: str
    name: str
    unit: str # kg, pack, etc.
    price: float
    discount_price: Optional[float] = None
    stock: int
    image_url: str

# E-commerce
class EcomProduct(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    seller_id: str
    name: str
    description: str
    description_full: Optional[str] = None
    price: float
    mrp: float
    rating: float = 0.0
    reviews_count: int = 0
    images: List[str]
    variants: List[Dict[str, Any]] = []

# Order Shared
class OrderStatus(str, Enum):
    PLACED = "placed"
    CONFIRMED = "confirmed"
    PREPARING = "preparing"
    PICKED_UP = "picked_up"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"

class Order(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    user_id: str
    module: str # food, quick, ecom, service
    items: List[Dict[str, Any]]
    total_amount: float
    status: OrderStatus
    delivery_address: Address
    delivery_partner_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
