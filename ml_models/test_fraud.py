from fraud_detection import fraud_detection

# simulated database
database = ["S1001", "S1002"]

# application form data
form_data = {
    "student_id": "S1001",
    "name": "Rahul",
    "board_marks": 90,
    "hall_ticket": "12345"
}

# OCR extracted document data
ocr_data = {
    "name": "Rahul",
    "board_marks": 90,
    "hall_ticket": "12345"
}

result = fraud_detection(form_data, ocr_data, database)

print("Fraud Detection Result:", result)