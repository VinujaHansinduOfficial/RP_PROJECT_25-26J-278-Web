import React, { useState } from 'react';
import './Contact.css';

const contactItems = [
  { ico: '🏫', label: 'Institution', value: 'Sri Lanka Institute of Information Technology' },
  { ico: '📍', label: 'Location',    value: 'Malabe, Colombo, Sri Lanka' },
  { ico: '🔬', label: 'Department',  value: 'Department of Information Technology' },
  { ico: '🌐', label: 'Project Portal', value: <a href="http://cdap.sliit.lk/" target="_blank" rel="noreferrer">cdap.sliit.lk</a> },
  { ico: '🆔', label: 'Project ID',  value: '25-26J-278' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact dot-bg">
      <div className="container">
        <p className="s-eyebrow">Get In Touch</p>
        <h2 className="s-title">Contact Us</h2>
        <div className="s-bar" />
        <div className="contact-grid">

          <div className="ci-list">
            {contactItems.map((c, i) => (
              <div className="ci" key={i}>
                <span className="ci-ico">{c.ico}</span>
                <div>
                  <div className="cl">{c.label}</div>
                  <div className="cv">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form className="cform" onSubmit={handleSubmit}>
            <input
              type="text" name="name" placeholder="Your name"
              value={form.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Your email address"
              value={form.email} onChange={handleChange} required
            />
            <input
              type="text" name="subject" placeholder="Subject"
              value={form.subject} onChange={handleChange} required
            />
            <textarea
              name="message" placeholder="Your message..."
              value={form.message} onChange={handleChange} required
            />
            <button type="submit" className="btn btn-teal">
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
            {sent && <p className="success-msg">Thank you! We will get back to you soon.</p>}
          </form>

        </div>
      </div>
    </section>
  );
}
