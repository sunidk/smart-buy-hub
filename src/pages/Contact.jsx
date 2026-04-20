import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:smartbuyhub97@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Contact Us</h1>
        <p className="lead">
          Got a question, product suggestion, or feedback? We'd love to hear from you.
          Fill in the form below and we'll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="success-message">
            Thanks for reaching out! Your email client should open with your message.
            We'll reply within 1–2 business days.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Priya Sharma"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}

        <div className="contact-info">
          <h2>Other Ways to Reach Us</h2>
          <p>
            Email us directly at{" "}
            <a href="mailto:smartbuyhub97@gmail.com">smartbuyhub97@gmail.com</a>.
            We typically respond within 1–2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
