import React from 'react';
import './DiabetesInfo.css'; // Link to the CSS file

const DiabetesInfo = () => {
    return (
        <section className="diabetes-info">
            <div className="content-container">
                {/* Header */}
                <header className="section-header">
                    <h1>Understanding Diabetes and Pregnancy</h1>
                </header>

                {/* Content Section */}
                <div className="content">
                    {/* Text and Image Section */}
                    <div className="text-content">
                        <h2>What is Diabetes?</h2>
                        <p>
                            Diabetes is a chronic condition where the body cannot properly process food for use as energy. It affects the way the body uses insulin, leading to elevated blood sugar levels.
                        </p>
                        <p>
                            For pregnant women, diabetes can pose additional challenges and risks, making management crucial for the health of both mother and baby.
                        </p>
                        <img src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/7104-diabetes-symptoms" alt="Diabetes Definition" className="section-image" />
                    </div>

                    {/* Text and Image Section */}
                    <div className="text-content">
                        <h2>Effects on Pregnant Women</h2>
                        <p>
                            Pregnant women with diabetes need to carefully manage their blood sugar levels to prevent complications. Poorly managed diabetes during pregnancy can lead to risks such as:
                        </p>
                        <ul>
                            <li>Gestational Diabetes: A type of diabetes that develops during pregnancy and usually resolves after childbirth.</li>
                            <li>High Blood Pressure: Increased risk of hypertension and preeclampsia.</li>
                            <li>Large Baby (Macrosomia): Higher chances of delivering a larger-than-average baby, which can complicate delivery.</li>
                            <li>Increased Risk of Premature Birth: Higher likelihood of preterm labor and delivery.</li>
                            <li>Postpartum Complications: Increased risk of developing type 2 diabetes after pregnancy.</li>
                        </ul>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQsgC6t0-RhYeQhRwD0ABK5JZrg92m96khw&s" alt="Diabetes Effects on Pregnancy" className="section-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiabetesInfo;
