import React from 'react';
import { FaMobileAlt, FaKey, FaUsers, FaCloud, FaRocket } from 'react-icons/fa';


function Features() {
    return (
        <div className="container mt-4">
            <h2 className="display-4 fw-bold text-center mb-5">Features</h2>
            
            <section className="mb-5">
                <h3 className="text-light"><FaMobileAlt className="me-2" /> Easy-to-Use Interface</h3>
                <p className="lead">
                    Our system offers an intuitive and user-friendly interface that makes managing your data a breeze. 
                    Whether you're adding, editing, or deleting records, the process is straightforward and efficient.
                </p>
            </section>

            <section className="mb-5">
                <h3 className="text-light"><FaKey className="me-2" /> Secure Data Storage</h3>
                <p className="lead">
                    Security is our top priority. We ensure that your data is stored securely with robust encryption and 
                    regular backups to prevent data loss.
                </p>
            </section>

            <section className="mb-5">
                <h3 className="text-light"><FaUsers className="me-2" /> Customizable Fields</h3>
                <p className="lead">
                    Tailor the database to your specific needs with customizable fields. Add, remove, or modify fields 
                    to suit the type of data you need to store.
                </p>
            </section>

            <section className="mb-5">
                <h3 className="text-light"><FaCloud className="me-2" /> Real-Time Collaboration</h3>
                <p className="lead">
                    Collaborate with your team in real-time. Multiple users can access and update the database simultaneously, 
                    ensuring everyone is on the same page.
                </p>
            </section>

            <section className="mb-5">
                <h3 className="text-light"><FaRocket className="me-2" /> Future Enhancements</h3>
                <p className="lead">
                    We're constantly working to improve our system. Upcoming features include advanced analytics, 
                    cloud integration, and more customization options to enhance your experience.
                </p>
            </section>
        </div>
    );
}

export default Features;