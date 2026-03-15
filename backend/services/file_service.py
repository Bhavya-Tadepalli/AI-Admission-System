import os
import uuid
from fastapi import UploadFile
from database.mongo import documents_collection

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def save_file(file: UploadFile, application_id: str, doc_type: str):
    ext = os.path.splitext(file.filename)[1]
    unique_filename = f"{doc_type}_{uuid.uuid4().hex}{ext}"
    file_path = os.path.join(UPLOAD_FOLDER, unique_filename)

    with open(file_path, "wb") as f:
        while chunk := file.file.read(1024 * 1024):
            f.write(chunk)

    # Save reference in MongoDB
    documents_collection.insert_one({
        "application_id": application_id,
        "file_type": doc_type,
        "file_name": file.filename,
        "file_path": file_path
    })

    return file_path