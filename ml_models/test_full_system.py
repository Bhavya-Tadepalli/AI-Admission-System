from admission_ai_system import run_admission_ai

student = {
    "student_id": "S1005",
    "name": "Rahul",
    "board_marks": 975,
    "math_marks": 90,
    "physics_marks": 85,
    "chemistry_marks": 78,
    "biology_marks": 40,
    "commerce_marks": 20,
    "jee_percentile": 92,
    "vsat_rank": None,
    "eamcet_rank": None,
    "board_percentage": 97,
    "entrance_exam": 1,
    "entrance_score": 120,
    "extracurricular_score": 3,
    "category": 0,
    "preferred_stream": 2,
    "scholarship_eligibility": 1,
    "age": 18,
    "gender": 1,
    "admission_probability": 0.5
}

ocr_data = {
    "name": "Rahul",
    "board_marks": 975
}

database_ids = ["S1001", "S1002"]

result = run_admission_ai(student, ocr_data, database_ids)

print(result)