import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-overlay"></div> {/* Superposición de sombra */}
      <div className="contact-content">
        <div className="contact-text">
          <h2>Bluid your audience and sale more</h2>
          <p>
            Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS HTML page.
          </p>
          <div className="contact-buttons">
            <button className="btn-get-started">Get Started</button>
            <button className="btn-watch-now">WATCH NOW</button>
          </div>
        </div>
        <div className="contact-form">
          <h3>We are offering 14 days free trial</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.:</label>
              <input type="tel" id="phone" name="phone" placeholder="+12 12458 854" />
            </div>
            <button type="submit" className="btn-free-trial">Free Trial</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
