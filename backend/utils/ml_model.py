def predict_admission(gpa: float, gre_score: int, course: str) -> dict:
    print(f"[ML] Predicting admission for GPA={gpa}, GRE={gre_score}, Course={course}")
    probability = min(1.0, (gpa / 10) + (gre_score / 340) / 2)
    decision = "Admit" if probability > 0.6 else "Reject"
    return {"decision": decision, "probability": round(probability, 2)}