import pytesseract
import cv2
import re
import os
from pdf2image import convert_from_path

# Tesseract path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


# -----------------------------
# Image Preprocessing
# -----------------------------
def preprocess_image(image_path):

    img = cv2.imread(image_path)

    if img is None:
        print("Error loading image")
        return None

    # convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # resize image to improve OCR
    gray = cv2.resize(gray, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

    # remove noise
    blur = cv2.GaussianBlur(gray, (5,5), 0)

    # threshold
    thresh = cv2.threshold(blur, 0, 255,
                           cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

    return thresh


# -----------------------------
# OCR for images
# -----------------------------
def extract_text_from_image(image_path):

    processed_image = preprocess_image(image_path)

    if processed_image is None:
        return ""

    # SAVE THE PROCESSED IMAGE FOR DEBUGGING
    cv2.imwrite("processed_debug.png", processed_image)

    text = pytesseract.image_to_string(
        processed_image,
        config="--oem 3 --psm 4"
    )

    return text


# -----------------------------
# OCR for PDFs
# -----------------------------
def extract_text_from_pdf(pdf_path):

    pages = convert_from_path(pdf_path)

    full_text = ""

    for page in pages:

        temp_image = "temp_page.png"
        page.save(temp_image, "PNG")

        text = extract_text_from_image(temp_image)

        full_text += text

        os.remove(temp_image)

    return full_text


# -----------------------------
# Extract structured fields
# -----------------------------

def extract_details(text):

    details = {}

    name = re.search(r"certify that\s+([A-Z\s\.]+)", text, re.IGNORECASE)

    father = re.search(r"father'?s name\s+([A-Z\s\.]+?)\s+mother", text, re.IGNORECASE)

    mother = re.search(r"mother'?s name\s+([A-Z\s\.]+?)\s+bearing", text, re.IGNORECASE)

    reg = re.search(r"registration number\s*(\d+)", text, re.IGNORECASE)

    marks = re.search(r"TOTAL MARKS IN FIGURES\s*(\d+)", text, re.IGNORECASE)

    if name:
        details["Name"] = name.group(1).strip()

    if father:
        details["Father Name"] = father.group(1).strip()

    if mother:
        details["Mother Name"] = mother.group(1).strip()

    if reg:
        details["Registration Number"] = reg.group(1)

    if marks:
        details["Total Marks"] = marks.group(1)

    return details

# -----------------------------
# Main document processing
# -----------------------------
def process_document(file_path):

    if file_path.lower().endswith(".pdf"):
        text = extract_text_from_pdf(file_path)
    else:
        text = extract_text_from_image(file_path)

    details = extract_details(text)

    return text, details


# -----------------------------
# Testing mode
# -----------------------------
if __name__ == "__main__":

    file_path = input("Enter file path (PDF/JPG/PNG): ")

    raw_text, extracted_details = process_document(file_path)

    print("\n------------- RAW OCR TEXT -------------\n")
    print(raw_text)

    print("\n------------- EXTRACTED DETAILS -------------\n")

    if extracted_details:
        for key, value in extracted_details.items():
            print(f"{key}: {value}")
    else:
        print("No structured details detected")