import joblib
import pandas as pd

# load trained model
model = joblib.load("ml_models/admission_model.pkl")

def predict_admission(student_data):

    df = pd.DataFrame([student_data])

    prediction = model.predict(df)[0]

    probability = model.predict_proba(df)[0][1]

    return {
        "prediction": int(prediction),
        "probability": float(probability)
    }