import React from "react";

export default function Contact() {
  const contacts = [
    { icon: "🐙", label: "GitHub", url: "https://github.com/robles-123" },
    { icon: "f", label: "Facebook", url: "https://www.facebook.com/joshua.robles.7927" },
    { icon: "✉", label: "Email", url: "https://mail.google.com/mail/u/0/#chat/home" }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a question or want to work together? Feel free to reach out!</p>

        <div className="contact-card">
          <h3 className="contact-heading">Connect With Me</h3>
          <p className="contact-description">Find me on social media or send me an email directly.</p>

          <div className="contact-links">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">{contact.icon}</span>
                <span className="contact-label">{contact.label}</span>
              </a>
            ))}
          </div>

          <div className="contact-footer">
            © 2025 Joshua Robles. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
