from transformers import pipeline

generator = pipeline("text-generation", model="distilgpt2")

def generate_admission_insight(student_profile):

    prompt = f"""
    Analyze this undergraduate student academic profile and give admission insight.

    Student Profile:
    {student_profile}

    Give a short recommendation for UG admission.
    """

    result = generator(prompt, max_length=120)

    return result[0]["generated_text"]