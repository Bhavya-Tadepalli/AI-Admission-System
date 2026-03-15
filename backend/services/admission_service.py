from utils import ocr, ml_model, llm_module
from database.mongo import admission_results_collection


def process_admission(application_id: str, file_path: str):

    # 1️⃣ OCR: extract text from marksheet
    extracted_text = ocr.extract_text(file_path)

    # 2️⃣ Parse GPA/GRE (dummy values for now)
    gpa = 9.2
    gre_score = 320
    course = "Computer Science"

    # 3️⃣ ML: predict admission
    ml_result = ml_model.predict_admission(gpa, gre_score, course)

    # 4️⃣ LLM: generate admission summary
    summary = llm_module.generate_admission_summary(
        application_id,
        extracted_text,
        ml_result
    )

    # 5️⃣ Store result in MongoDB
    result_doc = {
        "application_id": application_id,
        "extracted_text": extracted_text,
        "ml_result": ml_result,
        "summary": summary
    }

    admission_results_collection.insert_one(result_doc)

    return result_doc