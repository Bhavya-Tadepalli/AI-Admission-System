from fastapi import APIRouter
from schemas.application_schema import ApplicationCreate
from services import application_service, admission_service

router = APIRouter(prefix="/applications")

@router.post("/submit")
def submit_application(application: ApplicationCreate):
    return application_service.submit_application(application.dict())

@router.get("/")
def get_all_applications():
    return application_service.get_all_applications()

@router.post("/process-admission/{application_id}")
def process_admission(application_id: str, file_path: str):
    return admission_service.process_admission(application_id, file_path)