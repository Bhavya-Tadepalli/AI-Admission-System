from fastapi import FastAPI
from ml_models.predict_admission import predict_admission

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Admission System Backend Running"}

@app.post("/predict-admission")
def predict(student: dict):

    result = predict_admission(student)

    return result