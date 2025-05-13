import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/animations.css';

const subtitles = [
  'Cybersecurity Enthusiast',
  'Full Stack Developer',
  'Open Source Contributor',
  'Problem Solver'
];

function Home() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < subtitles[subtitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(subtitles[subtitleIndex].slice(0, displayed.length + 1));
        }, 60);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(subtitles[subtitleIndex].slice(0, displayed.length - 1));
        }, 30);
      } else {
        setTyping(true);
        setSubtitleIndex((i) => (i + 1) % subtitles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, subtitleIndex]);

  return (
    <div> {/* Wrapper div */}
      <noscript>You need to enable JavaScript to run this app.</noscript>
      
      {/* Original Home Content */}
    <section className="hero-section">
            <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Hello, it&apos;s me</div>
          <div className="hero-name">Amitathoriya</div>
          <div className="hero-animated">
              And I&apos;m a <span className="animated-subtitle">{displayed}</span>
              <span className="terminal-cursor"></span>
          </div>
            <ul className="info-list cyber-border">
            <li>👋 Hi, I'm @Amitathoriya</li>
              <li>👀 Hi! I'm Amit, I have a strong interest in cyber security...</li> 
              <li>🔐 I recently working a Password Manager in Java...</li>
              <li>🌱 I'm currently learning coding languages...</li>
              <li>💞️ I'm looking to collaborate on open source projects...</li>
              <li>💡 I'm excited to collaborate with others...</li>
          </ul>
        </div>
          <div className="hero-image-container cyber-border">
          <img src="/Git_profiel.jpg" alt="Profile" className="hero-image" />
        </div>
      </div>
      </section>

      <section className="cards-section">
      <div className="card-row">
        <Link to="/projects" className="card-link">
            <div className="card cyber-border">
            <img src="/Git_profiel.jpg" alt="Projects" className="card-img" />
            <div className="card-label">Projects</div>
          </div>
        </Link>
        <Link to="/achievements" className="card-link">
            <div className="card cyber-border">
            <img src="/Git_profiel.jpg" alt="Achievements" className="card-img" />
            <div className="card-label">Achievement</div>
          </div>
        </Link>
        <Link to="/about" className="card-link">
            <div className="card cyber-border">
            <img src="/Git_profiel.jpg" alt="About" className="card-img" />
            <div className="card-label">About</div>
          </div>
        </Link>
      </div>
    </section>
    </div>
  );
}

export default Home; 