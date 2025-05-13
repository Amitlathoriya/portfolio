import React from 'react';
import '../styles/Skills.css';
import '../styles/animations.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="binary-bg"></div>
      <div className="skills-content cyber-border">
        <h1 className="skills-title glitch-text">Skills</h1>
        <div className="skills-grid">
          <div className="skill-card cyber-border">
          <span className="skill-emoji">💻</span>
            <h2 className="scan-text">Frontend</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
          <div className="skill-card cyber-border">
          <span className="skill-emoji">🛠️</span>
            <h2 className="scan-text">Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
          <div className="skill-card cyber-border">
          <span className="skill-emoji">🗄️</span>
            <h2 className="scan-text">Database</h2>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
          <div className="skill-card cyber-border">
          <span className="skill-emoji">🔧</span>
            <h2 className="scan-text">Tools</h2>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>npm</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skills; 