def check_duplicate(student_id, database):

    if student_id in database:
        return True

    return False


def check_mismatch(form_data, ocr_data):

    if form_data.get("name") != ocr_data.get("name"):
        return True

    if form_data.get("board_marks") != ocr_data.get("board_marks"):
        return True

    if form_data.get("hall_ticket") != ocr_data.get("hall_ticket"):
        return True

    return False


def fraud_detection(form_data, ocr_data, database):

    if check_duplicate(form_data.get("student_id"), database):
        return {
            "status": "fraud",
            "reason": "Duplicate application"
        }

    if check_mismatch(form_data, ocr_data):
        return {
            "status": "fraud",
            "reason": "Data mismatch with document"
        }

    return {
        "status": "genuine"
    }