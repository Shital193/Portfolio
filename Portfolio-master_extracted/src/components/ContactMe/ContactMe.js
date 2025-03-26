import React, { useState } from 'react';
import './ContactMe.css';
import { assets } from '../../assets/assets';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const response = await fetch('https://formspree.io/f/xdkoornl', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if submission was successful
    if (response.ok) {
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Message sent successfully!');
    } else {
      alert('There was an error sending your message.');
    }
  };

  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">Contact Me</h1>
      <span className="section_subtitle">
        Want to connect? My inbox is always open!
      </span>

      <div className="contact_container container grid">
        <div>
          <a href="mailto:shitalmodhavadiya193@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.email} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">shitalmodhavadiya193@gmail.com</span>
              </div>
            </div>
          </a>

          <a href="https://meet.google.com/landing" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.meeting} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Online Meet</h3>
                <span className="contact_subtitle">@Meeting</span>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/shital-modhavadiya-563623272" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.linkedin} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">LinkedIn</h3>
                <span className="contact_subtitle">@ShitalModhavadiya</span>
              </div>
            </div>
          </a>

          <a href="https://www.google.com/maps/place/Porbandar,+Gujarat/@21.6355998,69.5477099,12z/data=!3m1!4b1!4m6!3m5!1s0x3956345051c2f8e5:0x9e2165b8de9bd8ca!8m2!3d21.6416979!4d69.6293059!16zL20vMDI2eWZt?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D">
            <div className="contact_info">
              <img src={assets.location} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">@Porbandar</span>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input
                type="text"
                name="name"
                className="contact_input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact_content">
              <label className="contact_label">Email</label>
              <input
                type="email"
                name="email"
                className="contact_input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact_content">
            <label className="contact_label">Subject</label>
            <input
              type="text"
              name="subject"
              className="contact_input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact_content">
            <label className="contact_label">Message</label>
            <textarea
              name="message"
              cols="0"
              rows="7"
              className="contact_input message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <img src={assets.send} alt="Message Icon" className="button_icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
