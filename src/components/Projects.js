import React from 'react';
import '../styles/Projects.css';
import '../styles/animations.css';

function Projects() {
  const projects = [
    {
      title: "Password Manager",
      description: "A secure password management system built in Java with encryption and secure storage capabilities.",
      technologies: ["Java", "Encryption", "SQLite", "Security"],
      link: "https://github.com/yourusername/password-manager"
    },
    {
      title: "Network Scanner",
      description: "A Python-based network scanning tool for security assessment and vulnerability detection.",
      technologies: ["Python", "Network Security", "Scapy", "Nmap"],
      link: "https://github.com/yourusername/network-scanner"
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted chat application with secure key exchange and message authentication.",
      technologies: ["React", "Node.js", "WebSocket", "Crypto.js"],
      link: "https://github.com/yourusername/secure-chat"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated web application vulnerability scanner with detailed reporting capabilities.",
      technologies: ["Python", "OWASP", "Security Testing", "Reporting"],
      link: "https://github.com/yourusername/vuln-scanner"
    }
  ];

  return (
    <div className="projects-container">
      <div className="binary-bg"></div>
      <div className="projects-content cyber-border">
        <h1 className="glitch-text">Projects</h1>
        
      <div className="projects-grid">
        {projects.map((project, index) => (
            <div key={index} className="project-card cyber-border">
              <div className="project-header">
                <h2 className="scan-text">{project.title}</h2>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span className="link-text">View Code</span>
                    <span className="link-icon">→</span>
                  </a>
                </div>
              </div>
              
              <p className="typing-text">{project.description}</p>
              
              <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag cyber-border">
                    {tech}
                  </span>
              ))}
            </div>
          </div>
        ))}
        </div>

        <div className="ctf-section cyber-border">
          <h2 className="scan-text">CTF Achievements</h2>
          <div className="ctf-grid">
            <div className="ctf-card cyber-border">
              <h3>HackTheBox</h3>
              <p>Rank: Top 1000</p>
              <p>Machines: 20+</p>
            </div>
            <div className="ctf-card cyber-border">
              <h3>TryHackMe</h3>
              <p>Rank: Top 500</p>
              <p>Rooms: 30+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 