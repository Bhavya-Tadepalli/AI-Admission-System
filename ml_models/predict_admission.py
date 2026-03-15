import joblib
import pandas as pd

model = joblib.load("admission_model.pkl")

# features used while training
MODEL_FEATURES = [
    "age",
    "gender",
    "category",
    "preferred_stream",
    "entrance_exam",
    "entrance_score",
    "board_percentage",
    "extracurricular_score",
    "admission_probability",
    "scholarship_eligibility"
]


def predict_admission(student):

    # keep only model features
    filtered_data = {k: student[k] for k in MODEL_FEATURES if k in student}

    df = pd.DataFrame([filtered_data])

    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0][1]

    return prediction, probability