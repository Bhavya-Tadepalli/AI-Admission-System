def generate_admission_summary(application_id: str, extracted_text: str, ml_result: dict) -> str:
    print(f"[LLM] Generating summary for application {application_id}")
    summary = f"""
    Admission Summary for Application ID: {application_id}

    Extracted Text from Document:
    {extracted_text}

    ML Prediction:
    Decision: {ml_result['decision']}
    Probability: {ml_result['probability']}

    Congratulations! {ml_result['decision']}.
    """
    return summary