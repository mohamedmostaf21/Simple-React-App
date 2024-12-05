import React from 'react';
import { useNavigate  } from 'react-router-dom';


function Contact() {
    const  navigate = useNavigate ();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        navigate('/thank-you'); // Redirect to Thank You page
    };

    return (
        <div className="container mt-4">
            <h2 className="display-4 fw-bold text-center mb-5">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control w-25 m-auto" id="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control w-25 m-auto" id="email" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control w-50 m-auto" id="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;