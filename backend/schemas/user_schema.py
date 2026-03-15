from pydantic import BaseModel, EmailStr, constr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: constr(min_length=8)

class UserLogin(BaseModel):
    email: EmailStr
    password: str