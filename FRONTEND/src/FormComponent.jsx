import React, { useState } from 'react';
import './FormComponent.css'; // Link to the CSS file

const FormComponent = () => {
    const [formData, setFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigreeFunction: '', // Add this missing field
        age: ''
    });

    const [prediction, setPrediction] = useState(null); // State to hold API response

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPrediction(data);
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Health Information Form</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="pregnancies">Enter the total number of your pregnancy period:</label>
                <input
                    type="number"
                    id="pregnancies"
                    name="pregnancies"
                    value={formData.pregnancies}
                    onChange={handleChange}
                />

                <label htmlFor="glucose">Enter your glucose level:</label>
                <input
                    type="number"
                    id="glucose"
                    name="glucose"
                    value={formData.glucose}
                    onChange={handleChange}
                />

                <label htmlFor="bloodPressure">Enter your blood pressure:</label>
                <input
                    type="number"
                    id="bloodPressure"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                />

                <label htmlFor="skinThickness">Enter your skin thickness:</label>
                <input
                    type="number"
                    id="skinThickness"
                    name="skinThickness"
                    value={formData.skinThickness}
                    onChange={handleChange}
                />

                <label htmlFor="insulin">Enter your insulin amount of body:</label>
                <input
                    type="number"
                    id="insulin"
                    name="insulin"
                    value={formData.insulin}
                    onChange={handleChange}
                />

                <label htmlFor="bmi">Enter your BMI:</label>
                <input
                    type="number"
                    id="bmi"
                    name="bmi"
                    step="0.1"
                    value={formData.bmi}
                    onChange={handleChange}
                />

                <label htmlFor="diabetesPedigreeFunction">Enter your diabetes pedigree function:</label>
                <input
                    type="number"
                    id="diabetesPedigreeFunction"
                    name="diabetesPedigreeFunction"
                    step="0.1"
                    value={formData.diabetesPedigreeFunction}
                    onChange={handleChange}
                />

                <label htmlFor="age">Enter your age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <button type="submit" className="submit-button">Submit</button>
            </form>

            {prediction && (
                <div className="prediction-result">
                    <h2>Prediction Result</h2>
                    <p><strong>Prediction:</strong> {prediction.prediction}</p>
                    <p><strong>Not Diabetic Probability:</strong> {prediction.probability.not_diabetic}</p>
                    <p><strong>Diabetic Probability:</strong> {prediction.probability.diabetic}</p>
                </div>
            )}
        </div>
    );
};

export default FormComponent;
