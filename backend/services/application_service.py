from database.mongo import applications_collection
from bson import ObjectId

def submit_application(app_data: dict):
    result = applications_collection.insert_one(app_data)
    return {
        "message": "Application submitted successfully",
        "application_id": str(result.inserted_id)
    }

def get_all_applications():
    apps = []
    for app in applications_collection.find():
        app["_id"] = str(app["_id"])
        apps.append(app)
    return apps

def get_applications_by_user(user_id: str):
    apps = []
    for app in applications_collection.find({"user_id": user_id}):
        app["_id"] = str(app["_id"])
        apps.append(app)
    return apps