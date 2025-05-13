import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="nav-logo">Portfolio</div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/achievements" className={location.pathname === '/achievements' ? 'active' : ''}>Achievements</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 