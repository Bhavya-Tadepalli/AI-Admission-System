from fastapi import APIRouter
from schemas.user_schema import UserCreate, UserLogin
from services import auth_service

router = APIRouter(prefix="/users")

@router.post("/register")
def register(user: UserCreate):
    return auth_service.register_user(user.dict())

@router.post("/login")
def login(user: UserLogin):
    return auth_service.login_user(user.email, user.password)