from documents.ocr_processor import process_document
from documents.student_profile import create_student_profile
from llm.llm_service import generate_admission_insight

file_path = "marksheet.png"

raw_text, details = process_document(file_path)

profile = create_student_profile(details)

insight = generate_admission_insight(profile)

print("Student Profile:", profile)
print("AI Admission Insight:", insight)