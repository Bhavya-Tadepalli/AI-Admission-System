from backend.database.mongo import users_collection
from backend.security import hash_password, verify_password

def register_user(user_data: dict):
    if users_collection.find_one({"email": user_data["email"]}):
        return {"error": "User already exists"}
    user_data["password"] = hash_password(user_data["password"])
    result = users_collection.insert_one(user_data)
    return {"message": "User registered successfully", "user_id": str(result.inserted_id)}

def login_user(email: str, password: str):
    user = users_collection.find_one({"email": email})
    if not user:
        return {"error": "User not found"}
    if not verify_password(password, user["password"]):
        return {"error": "Invalid password"}
    return {"message": "Login successful", "user_id": str(user["_id"]), "email": user["email"]}