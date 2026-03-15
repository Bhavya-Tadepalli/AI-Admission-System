def scholarship_prediction(student):

    vsat_rank = student.get("vsat_rank")
    jee_percentile = student.get("jee_percentile")
    eamcet_rank = student.get("eamcet_rank")
    inter_marks = student.get("inter_marks")
    cbse_marks = student.get("cbse_marks")

    # -----------------------------
    # 75% Scholarship
    # -----------------------------
    if vsat_rank is not None and vsat_rank <= 100:
        return "75% Scholarship"

    if jee_percentile is not None and jee_percentile > 95:
        return "75% Scholarship"

    if eamcet_rank is not None and eamcet_rank < 10000:
        return "75% Scholarship"

    if inter_marks is not None and inter_marks > 975:
        return "75% Scholarship"

    if cbse_marks is not None and cbse_marks > 450:
        return "75% Scholarship"


    # -----------------------------
    # 50% Scholarship
    # -----------------------------
    if vsat_rank is not None and 101 <= vsat_rank <= 200:
        return "50% Scholarship"

    if jee_percentile is not None and 89 <= jee_percentile <= 94.9:
        return "50% Scholarship"

    if 10001 <= (eamcet_rank or 999999) <= 20000:
        return "50% Scholarship"

    if inter_marks is not None and 960 <= inter_marks <= 974:
        return "50% Scholarship"

    if cbse_marks is not None and 426 <= cbse_marks <= 450:
        return "50% Scholarship"


    # -----------------------------
    # 25% Scholarship
    # -----------------------------
    if vsat_rank is not None and 201 <= vsat_rank <= 400:
        return "25% Scholarship"

    if jee_percentile is not None and 85 <= jee_percentile <= 88.9:
        return "25% Scholarship"

    if 20001 <= (eamcet_rank or 999999) <= 35000:
        return "25% Scholarship"

    if inter_marks is not None and 940 <= inter_marks <= 959:
        return "25% Scholarship"

    if cbse_marks is not None and 401 <= cbse_marks <= 425:
        return "25% Scholarship"


    # -----------------------------
    # 10% Scholarship
    # -----------------------------
    if vsat_rank is not None and 401 <= vsat_rank <= 2000:
        return "10% Scholarship"

    if jee_percentile is not None and 60 <= jee_percentile <= 84.9:
        return "10% Scholarship"

    if 35001 <= (eamcet_rank or 999999) <= 40000:
        return "10% Scholarship"

    if inter_marks is not None and 920 <= inter_marks <= 939:
        return "10% Scholarship"

    if cbse_marks is not None and 350 <= cbse_marks <= 400:
        return "10% Scholarship"


    return "No Scholarship"