import numpy as np
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

# Load and preprocess the dataset
diabetes_dataset = pd.read_csv("Server/data.csv")

# Separate features and target
X = diabetes_dataset.drop(columns="Outcome", axis=1)
y = diabetes_dataset["Outcome"]

# Standardize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train an SVC model
classifier = SVC(kernel="linear", probability=True)
classifier.fit(X_scaled, y)


# Define the input schema for the API
class DiabetesPredictionInput(BaseModel):
    pregnancies: int
    glucose: int
    bloodPressure: int
    skinThickness: int
    insulin: int
    bmi: float
    diabetesPedigreeFunction: float
    age: int


# Initialize FastAPI app
app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict_diabetes(data: DiabetesPredictionInput):
    # Prepare input data for prediction
    input_data = np.array(
        [
            data.pregnancies,
            data.glucose,
            data.bloodPressure,
            data.skinThickness,
            data.insulin,
            data.bmi,
            data.diabetesPedigreeFunction,
            data.age,
        ]
    ).reshape(1, -1)

    # Standardize input data
    try:
        input_data_scaled = scaler.transform(input_data)
    except Exception as e:
        raise HTTPException(
            status_code=400, detail="Error in input data scaling: " + str(e)
        )

    # Make prediction
    prediction = classifier.predict(input_data_scaled)
    probability = classifier.predict_proba(input_data_scaled)[0]

    # Return the result
    return {
        "prediction": "Diabetic" if prediction[0] == 1 else "Not Diabetic",
        "probability": {
            "not_diabetic": round(probability[0], 4),
            "diabetic": round(probability[1], 4),
        },
    }


@app.get("/")
async def root():
    return {"message": "Welcome to the Diabetes Prediction API!"}
