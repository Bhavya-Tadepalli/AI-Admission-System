from database.mongo import users_collection
from bson import ObjectId


# Register new user
def register_user(user_data):
    existing_user = users_collection.find_one({"email": user_data["email"]})

    if existing_user:
        return {"error": "User already exists"}

    result = users_collection.insert_one(user_data)

    return {
        "message": "User registered successfully",
        "user_id": str(result.inserted_id)
    }


# Login user
def login_user(email, password):
    user = users_collection.find_one({"email": email})

    if not user:
        return {"error": "User not found"}

    if user["password"] != password:
        return {"error": "Invalid password"}

    return {
        "message": "Login successful",
        "user_id": str(user["_id"]),
        "email": user["email"]
    }


# Get user by ID
def get_user_by_id(user_id):
    user = users_collection.find_one({"_id": ObjectId(user_id)})

    if not user:
        return None

    user["_id"] = str(user["_id"])
    return user