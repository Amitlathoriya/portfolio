import React from 'react';
import '../styles/Achievements.css';
import '../styles/animations.css';

function Achievements() {
  const achievements = [
    {
      title: "CompTIA Security+",
      description: "Global certification validating baseline skills necessary to perform core security functions.",
      date: "2023",
      issuer: "CompTIA"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      description: "Demonstrates knowledge of assessing the security of computer systems by looking for weaknesses and vulnerabilities.",
      date: "2023",
      issuer: "EC-Council"
    },
    {
      title: "First Place - National CTF Competition",
      description: "Led a team to victory in a challenging Capture The Flag competition focusing on web and network security.",
      date: "2022",
      issuer: "CyberSafe University Challenge"
    }
  ];

  return (
    <div className="achievements-container">
      <div className="binary-bg"></div>
      <div className="achievements-content cyber-border">
        <h1 className="achievements-title glitch-text">Achievements</h1>
        <div className="achievements-grid">
        {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card cyber-border">
              <div className="achievement-date scan-text">{achievement.date}</div>
              <h2 className="scan-text">{achievement.title}</h2>
              <p className="typing-text">{achievement.description}</p>
              <p className="issuer">Issued by: {achievement.issuer}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements; 