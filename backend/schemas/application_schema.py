from pydantic import BaseModel, EmailStr

class ApplicationCreate(BaseModel):
    user_id: str
    course: str
    gpa: float
    gre_score: int