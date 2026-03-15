from predict_admission import predict_admission
from course_recommendation import recommend_course
from risk_level import admission_risk
from fraud_detection import fraud_detection
from scholarship_prediction import scholarship_prediction


def run_admission_ai(student_data, ocr_data=None, database_ids=None):

    if database_ids is None:
        database_ids = []

    # -------------------------
    # Fraud Detection
    # -------------------------
    fraud_result = fraud_detection(student_data, ocr_data or {}, database_ids)

    if fraud_result["status"] == "fraud":
        return {
            "fraud_status": "fraud",
            "reason": fraud_result["reason"]
        }

    # -------------------------
    # Admission Prediction
    # -------------------------
    prediction, probability = predict_admission(student_data)

    # -------------------------
    # Risk Level
    # -------------------------
    risk = admission_risk(probability)

    # -------------------------
    # Course Recommendation
    # -------------------------
    course = recommend_course(student_data)

    # -------------------------
    # Scholarship Prediction
    # -------------------------
    scholarship = scholarship_prediction(student_data)

    return {
        "fraud_status": "genuine",
        "prediction": int(prediction),
        "probability": round(probability, 2),
        "risk_level": risk,
        "recommended_course": course,
        "scholarship": scholarship
    }