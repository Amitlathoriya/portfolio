import React from 'react';
import '../styles/About.css';
import '../styles/animations.css';

function About() {
  return (
    <div className="about-container">
      {/* Breadcrumb and Heading */}
      <div className="about-breadcrumb">Home &gt; <span>About Me</span></div>
      <h1 className="about-main-title">About Me</h1>

      {/* Profile Section */}
      <div className="about-profile-section">
        <div className="about-profile-pic-wrapper">
          <img src="/Git_profiel.jpg" alt="Amit Lathoriya" className="about-profile-pic" />
        </div>
        <div className="about-profile-info">
          <div className="about-badge">About Me</div>
          <h2 className="about-profile-headline">Cybersecurity Enthusiast & Full Stack Developer</h2>
          <p className="about-profile-desc">
            Hi, I'm <b>Amit Lathoriya</b>. I have a strong interest in cyber security, cloud security, and bug bounty. My major goals are to research the relationship between cloud technologies and cybersecurity and to design scalable, secure solutions using Google Cloud and Java. I recently worked on a Password Manager in Java, blending my interest in cybersecurity with practical technical abilities. I'm currently learning C++, Java, bug bounty, and cloud, and I'm excited to collaborate on open source projects related to cyber security.
          </p>
          <div className="about-profile-contact-grid">
            <div><b>Name:</b> Amit Lathoriya</div>
            <div><b>GitHub:</b> <a href="https://github.com/Amitlathoriya" target="_blank" rel="noopener noreferrer">Amitlathoriya</a></div>
            <div><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/amit-lathoriya-940265287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Amit Lathoriya</a></div>
            <div><b>Instagram:</b> <a href="https://www.instagram.com/amit_lathoriya/" target="_blank" rel="noopener noreferrer">@amit_lathoriya</a></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="about-section">
        <h2 className="about-section-title">My Work <span className="about-accent-green">Skills</span></h2>
        <p className="about-section-desc">Cybersecurity, Cloud Security, Bug Bounty, Full Stack Development, C++, Java, Google Cloud, Password Manager (Java), Open Source Collaboration</p>
        <div className="about-skills-grid">
          <div className="about-skill-card">
            <span className="about-skill-title">Cybersecurity</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill green" style={{width: '95%'}}></div></div>
          </div>
          <div className="about-skill-card">
            <span className="about-skill-title">Cloud Security</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill blue" style={{width: '90%'}}></div></div>
          </div>
          <div className="about-skill-card">
            <span className="about-skill-title">Bug Bounty</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill green" style={{width: '85%'}}></div></div>
          </div>
          <div className="about-skill-card">
            <span className="about-skill-title">Full Stack Development</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill blue" style={{width: '88%'}}></div></div>
          </div>
          <div className="about-skill-card">
            <span className="about-skill-title">C++ / Java</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill green" style={{width: '80%'}}></div></div>
          </div>
          <div className="about-skill-card">
            <span className="about-skill-title">Google Cloud</span>
            <div className="about-skill-bar"><div className="about-skill-bar-fill blue" style={{width: '75%'}}></div></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-section">
        <h2 className="about-section-title">My <span className="about-accent-blue">Services</span></h2>
        <p className="about-section-desc">Open source collaboration, secure solution design, password manager development, cloud security research.</p>
        <div className="about-services-grid">
          <div className="about-service-card">
            <div className="about-service-icon green"><i className="fas fa-shield-alt"></i></div>
            <div className="about-service-title">Cybersecurity Research</div>
          </div>
          <div className="about-service-card">
            <div className="about-service-icon blue"><i className="fas fa-code"></i></div>
            <div className="about-service-title">Open Source Projects</div>
          </div>
          <div className="about-service-card">
            <div className="about-service-icon green"><i className="fas fa-network-wired"></i></div>
            <div className="about-service-title">Cloud Security</div>
          </div>
          <div className="about-service-card">
            <div className="about-service-icon blue"><i className="fas fa-bug"></i></div>
            <div className="about-service-title">Bug Bounty</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 