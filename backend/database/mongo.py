from pymongo import MongoClient
from config import MONGO_URI, DB_NAME

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

# Collections
users_collection = db["users"]
applications_collection = db["applications"]
documents_collection = db["documents"]
admission_results_collection = db["admission_results"]