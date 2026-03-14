import joblib
import pandas as pd

# load trained model
model = joblib.load("admission_model.pkl")

# sample student data (must match training features)
sample = pd.DataFrame([{
    "age": 20,
    "gender": 1,
    "category": 0,
    "preferred_stream": 2,
    "entrance_exam": 1,
    "entrance_score": 120,
    "board_percentage": 85,
    "extracurricular_score": 3,
    "admission_probability": 0.75,
    "scholarship_eligibility": 1
}])

prediction = model.predict(sample)

print("Prediction:", prediction)