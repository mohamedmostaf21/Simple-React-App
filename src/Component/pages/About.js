import React from 'react';
import { FaRocket, FaUsers, FaKey, FaMobileAlt, FaCloud } from 'react-icons/fa';

import './about.css'
function About() {
    return (
        <div className="container mt-4">
            {/* Introduction Section */}
            <section className="text-center mb-5">
                <h2 className="display-4 fw-bold">About Our Simple Database System</h2>
                <p className="lead">
                    Our Simple Database System is designed to make managing your data easy and efficient.
                    Whether you're a small business, a student, or an organization, our system simplifies 
                    data storage and retrieval with an intuitive interface and robust features.
                </p>
            </section>

            {/* Mission Section */}
            <section className="mb-5">
                <h3 className="text-light"><FaRocket className="me-2" /> Our Mission</h3>
                <p className="lead">
                    We aim to empower users with simple yet powerful tools to handle their data. 
                    Our focus is on reliability, user-friendliness, and security.
                </p>
            </section>

            {/* Key Features Section */}
            <section className="mb-5">
                <h3 className="text-light"><FaKey className="me-2" /> Key Features</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <FaMobileAlt className="me-2" />
                        Easy-to-use interface for managing records
                    </li>
                    <li className="list-group-item">
                        <FaKey className="me-2" />
                        Fast and secure data storage
                    </li>
                    <li className="list-group-item">
                        <FaUsers className="me-2" />
                        Customizable fields to suit your needs
                    </li>
                    <li className="list-group-item">
                        <FaMobileAlt className="me-2" />
                        Accessible from any device
                    </li>
                    <li className="list-group-item">
                        <FaCloud className="me-2" />
                        Real-time collaboration with team members
                    </li>
                </ul>
            </section>

            {/* About the Team Section */}
            <section className="mb-5">
                <h3 className="text-light"><FaUsers className="me-2" /> About the Team</h3>
                <p>
                    We are a passionate group of developers and designers committed to creating
                    tools that improve productivity and efficiency. Our team has extensive experience
                    in building web applications tailored to user needs.
                </p>
            </section>

            {/* Looking Ahead Section */}
            <section className="mb-5">
                <h3 className="text-light"><FaRocket className="me-2" /> Looking Ahead</h3>
                <p>
                    We’re constantly working to enhance the system. Upcoming updates include:
                    advanced analytics, cloud integration, and even more customization options.
                </p>
            </section>

            {/* Get in Touch Section */}
            <section className="text-center mb-5">
                <h3 className="text-light"><FaMobileAlt className="me-2" /> Get in Touch</h3>
                <p>
                    Have questions or feedback? We'd love to hear from you! 
                    <br />
                    <a href="/contact" className="btn btn-light mt-3">Contact us</a> or check out our <a href="/features" className="btn btn-outline-primary mt-3">Features</a> page to learn more.
                </p>
            </section>
        </div>
    );
}

export default About;
