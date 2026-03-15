from scholarship_prediction import scholarship_prediction

student = {
    "vsat_rank": None,
    "jee_percentile": 92,
    "eamcet_rank": None,
    "inter_marks": None,
    "cbse_marks": None
}

result = scholarship_prediction(student)

print("Scholarship Result:", result)