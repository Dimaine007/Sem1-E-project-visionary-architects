import React from 'react';

const Contact = () => (
    <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: contact@visionaryarchitects.com</p>
        <p>Phone: +234-800-ARCH-123</p>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="phone number" placeholder="Your phone number" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
        </form>
        <p>We will contact you to book an appointment.</p>
    </section>
);

export default Contact;
