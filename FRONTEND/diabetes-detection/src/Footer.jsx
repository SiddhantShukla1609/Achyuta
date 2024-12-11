import React from 'react';
import './Footer.css'; // Link to the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        We are a team of passionate developers creating awesome web experiences. Contact us for more information.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 789</p>
                    <p>Location: 123 Street, City</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
