def recommend_course(student):

    math = student.get("math_marks", 0)
    physics = student.get("physics_marks", 0)
    chemistry = student.get("chemistry_marks", 0)
    biology = student.get("biology_marks", 0)
    commerce = student.get("commerce_marks", 0)

    if math > 80 and physics > 75:
        return "Engineering"

    elif biology > 80 and chemistry > 70:
        return "Medical"

    elif commerce > 75:
        return "Management"

    else:
        return "General Degree"