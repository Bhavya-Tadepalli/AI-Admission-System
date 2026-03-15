from fastapi import APIRouter, UploadFile, File
from services.file_service import save_file

router = APIRouter(prefix="/files", tags=["Files"])

@router.post("/upload-marksheets/{application_id}")
def upload_marksheets(
    application_id: str,
    tenth_marksheet: UploadFile = File(...),
    inter_marksheet: UploadFile = File(...)
):
    tenth_path = save_file(tenth_marksheet, application_id, "tenth")
    inter_path = save_file(inter_marksheet, application_id, "inter")

    return {
        "tenth_marksheet": tenth_path,
        "inter_marksheet": inter_path
    }