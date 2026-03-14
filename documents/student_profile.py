def create_student_profile(details):

    profile = {
        "Name": details.get("Name"),
        "Father Name": details.get("Father Name"),
        "Mother Name": details.get("Mother Name"),
        "Registration Number": details.get("Registration Number"),
        "Total Marks": details.get("Total Marks")
    }

    return profile