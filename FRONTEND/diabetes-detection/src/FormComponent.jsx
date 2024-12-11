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
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here (e.g., send data to a server or process it)
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
        </div>
    );
};

export default FormComponent;
