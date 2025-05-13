import React from 'react';
import '../styles/Contact.css';
import '../styles/animations.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="binary-bg"></div>
      <div className="contact-content cyber-border">
        <h1 className="contact-title glitch-text">Contact</h1>
        <div className="contact-info-container cyber-border">
          <h2 className="scan-text">Get in Touch</h2>
          <div className="contact-info">
            <p className="typing-text">GitHub: <a href="https://github.com/Amitlathoriya" target="_blank" rel="noopener noreferrer" className="social-link">@Amitlathoriya</a></p>
            <p className="typing-text">Instagram: <a href="https://www.instagram.com/amit_lathoriya/" target="_blank" rel="noopener noreferrer" className="social-link">@amit_lathoriya</a></p>
            <p className="typing-text">LinkedIn: <a href="https://www.linkedin.com/in/amit-lathoriya-940265287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">Amit Lathoriya</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 