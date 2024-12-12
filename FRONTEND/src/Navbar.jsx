import React, { useState } from 'react';
import './Navbar.css'; // Link to the CSS file
import FormComponent from './FormComponent'; // Import the form component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleServicesClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowForm(!showForm); // Toggle form visibility
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">Brand</div>

                {/* Hamburger icon for mobile view */}
                <div className="navbar-toggle" onClick={handleMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navbar links */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="https://www.healthcentral.com/article/type-1-vs-type-2-diabetes-differences-and-similarities">Home</a></li>
                    <li><a href="https://linktr.ee/siddhant_shukla?utm_source=linktree_profile_share">About US</a></li>
                    <li><a href="#services" onClick={handleServicesClick}>Services</a></li>
                    <li><a href="https://linktr.ee/siddhant_shukla?utm_source=linktree_profile_share">Contact</a></li>
                </ul>
            </nav>

            {/* Conditionally render the form */}
            {showForm && <FormComponent />}
        </div>
    );
};

export default Navbar;

