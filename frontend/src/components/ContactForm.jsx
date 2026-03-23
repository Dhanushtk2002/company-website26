import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', reason: 'General', description: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus({ type: 'success', text: 'ENQUIRY SENT SUCCESSFULLY' });
        setFormData({ name: '', email: '', phone: '', reason: 'General', description: '' });
      } else {
        setStatus({ type: 'error', text: 'ERROR SENDING ENQUIRY' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'SERVER ERROR' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="grid-container contact-grid">
        <div className="contact-info">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2 className="contact-title">Let's Build <br />The Future.</h2>
          <p className="contact-sub">
            Ready to scale your brand with AI-driven creativity? Drop us a line and our Gen Z specialists will reach out.
          </p>
          <div className="contact-details">
              <div>
                <p className="detail-label">Email Us</p>
                <p className="detail-value">hello@genlab.cc</p>
              </div>
              <div>
                <p className="detail-label">Visit Us</p>
                <p className="detail-value">Nagercoil, Tamil Nadu, IN</p>
              </div>
          </div>
        </div>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="contact-input" />
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required className="contact-input" />
            </div>
            <div className="input-group">
              <label className="input-label">Reason For Contact</label>
              <select value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} className="contact-input">
                <option value="General">General Inquiry</option>
                <option value="Branding">Branding & Identity</option>
                <option value="AI Development">AI Development & Automation</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Project Description</label>
              <textarea placeholder="Tell us about your brand goals..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required rows="4" className="contact-input"></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ border: 'none', width: '100%', justifyContent: 'center', marginTop: '16px' }}>
              SEND ENQUIRY
            </button>

            {status && (
              <div className={`status-msg ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
