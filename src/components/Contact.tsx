import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import PageDots from './PageDots';

const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonState('sending');

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_lfm60f8',
        'template_08nz57g',
        templateParams,
        'gANSe7CO7wso-tmlU'
      )
      .then(
        () => {
          setStatus('✅ Message sent! I’ll get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
          setButtonState('success');

          
          setTimeout(() => setButtonState('idle'), 2000);
        },
        () => {
          setStatus('❌ Failed to send. Please try again.');
          setButtonState('idle');
        }
      );
  };

  return (
    <main className="contact-page">
      <PageDots />
      <div className={`contact-intro-wrapper ${showForm ? 'shift-up' : ''}`}>
        <section className={`contact-intro ${introVisible ? 'fade-in' : ''}`}>
          <h1>Let’s Build Something Together</h1>
          <p>
            Have a project idea? Questions? Reach out and we’ll create something amazing.
          </p>

          {!showForm && (
            <button className="animated-button" onClick={() => setShowForm(true)}>
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Show Form</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          )}
        </section>

        <section className={`contact-section ${showForm ? 'active' : ''}`}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Message</label>
            </div>

            <button type="submit" className={`animated-button ${buttonState}`}>
              <span className="button-text">{buttonState !== 'success' ? 'Send Message' : ''}</span>
              <FaCheck className="tick-icon" />
              <span className="circle"></span>
            </button>

          </form>
          {status && <p className="form-status">{status}</p>}
        </section>
      </div>

      <a
        href="https://wa.me/+447850311367"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Or drop us a message on WhatsApp</span>
      </a>
    </main>
  );
};

export default Contact;
