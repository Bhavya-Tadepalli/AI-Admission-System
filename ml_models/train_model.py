import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# load dataset
data = pd.read_csv("../dataset/College_Admission.csv")

# remove columns that should not be features
data = data.drop(columns=["student_id", "state"], errors="ignore")
# handle missing values (do NOT remove zero scores)
data.fillna(data.mean(numeric_only=True), inplace=True)

# encode categorical columns
encoder = LabelEncoder()

for col in data.select_dtypes(include="object").columns:
    data[col] = encoder.fit_transform(data[col])

# split features and target
X = data.drop("admission_status", axis=1)
y = data["admission_status"]

# train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# train model
model = RandomForestClassifier()

model.fit(X_train, y_train)

# evaluate model
pred = model.predict(X_test)

accuracy = accuracy_score(y_test, pred)

print("Model Accuracy:", accuracy)

# save trained model
joblib.dump(model, "admission_model.pkl")

print("Model saved successfully!")