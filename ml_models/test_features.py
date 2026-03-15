from course_recommendation import recommend_course
from risk_level import admission_risk
from fraud_detection import fraud_detection


# -----------------------------
# Sample student marks
# -----------------------------
student = {
    "math_marks": 90,
    "physics_marks": 85,
    "chemistry_marks": 78,
    "biology_marks": 40,
    "commerce_marks": 20
}

# Course recommendation
course = recommend_course(student)
print("Recommended Course:", course)


# -----------------------------
# Admission risk level
# -----------------------------
probability = 0.82
risk = admission_risk(probability)

print("Admission Risk Level:", risk)


# -----------------------------
# Fraud detection test
# -----------------------------

# Data entered in application form
form_data = {
    "student_id": "S1001",
    "name": "Rahul",
    "board_marks": 90,
    "hall_ticket": "12345"
}

# Data extracted from document (OCR)
ocr_data = {
    "name": "Rahul",
    "board_marks": 90,
    "hall_ticket": "12345"
}

# Simulated database student IDs
database_ids = ["S1002", "S1003"]

# Fraud detection result
fraud_result = fraud_detection(form_data, ocr_data, database_ids)

print("Fraud Detection:", fraud_result)