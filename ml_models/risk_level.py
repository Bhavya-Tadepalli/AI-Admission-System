def admission_risk(probability):

    if probability >= 0.75:
        return "High Chance"

    elif probability >= 0.50:
        return "Medium Chance"

    else:
        return "Low Chance"