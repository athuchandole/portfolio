// src/projects/apps.js
import React from 'react';
import './apps.css';
import attendanceImg from '../assets/Projects/bg.png';
import codeCraftImg from '../assets/Projects/bg.png';
import webSphereImg from '../assets/Projects/2.png';
import mobileSyncImg from '../assets/Projects/1.png';

const ProjectApps = ({ theme }) => {
  const projects = [
    {
      id: 1,
      name: 'Bhagavd Geeta App',
      description: 'Developed a cross-platform mobile app using React Native to explore verses from the Bhagavad Gita. Integrated RapidAPI to fetch chapter-wise and verse-wise data dynamically. Key features included:',
      icon: attendanceImg,
      category: 'React Native',
      features: [
        '🌓 Theme support: Light and dark modes using Context',
        '🌐 Multi-language support: Display verses in multiple Indian languages',
        '🛠️ State management: React hooks and Context for efficient data handling',
        '🔁 Translations & commentary: Fetched from API with smooth toggle UI',
        '🧭 Navigation: React Navigation for seamless screen transitions'
      ],
      buttonType: 'Install',
      link: 'https://drive.google.com/file/d/1VlVCxKkFmTU9Y6OphEmyizLERug4D-vW/view?usp=drive_link'
    },
    {
      id: 2,
      name: 'Bhagavd Geeta Web',
      description: 'Advanced code editor for developers',
      icon: codeCraftImg,
      category: 'React Js',
      features: ['Theme', 'Live preview', 'Clean UI'],
      buttonType: 'View',
      link: 'https://instagram.com/codecraft'
    },
    {
      id: 3,
      name: 'Attendance App',
      description: 'Comprehensive web browsing experience',
      icon: webSphereImg,
      category: 'Java & XML',
      features: ['Multi-tab', 'Private mode', 'Bookmark manager'],
      buttonType: 'Download',
      link: 'https://athuchandole.github.io/Geeta/'
    },
    {
      id: 4,
      name: 'Digital Menu',
      description: 'Cross-platform mobile synchronization tool',
      icon: mobileSyncImg,
      category: 'PHP',
      features: ['Order Menu', 'cart', 'Order List'],
      buttonType: 'View',
      link: 'https://athuchandole.github.io/Geeta/',
    }
  ];

  return (
    <div
      className="project-apps-container"
      style={{
        '--bg-color': theme.cardBackground,
        '--text-color': theme.text,
        '--accent-color': theme.accent,
        '--muted-color': theme.mutedText,
        '--button-bg': theme.primary,
        '--button-hover': theme.linkHover,
        '--star-color': theme.warning,
        '--shadow-color': theme.shadow
      }}
    >
      <h1 className="page-title">My Projects</h1>
      <div className="apps-grid">
        {projects.map((app) => (
          <div key={app.id} className="app-card">
            <div className="app-header">
              <div className="app-icon">
                <img src={app.icon} alt={`${app.name} icon`} className="app-img" />
              </div>
              <div className="app-info">
                <h2 className="app-name">{app.name}</h2>
                <p className="app-category">{app.category}</p>
              </div>
            </div>

            <div className="app-description">
              <p>{app.description}</p>
              <ul className="app-features">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="app-footer">
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="app-button-link"
              >
                <button className="app-button">
                  {app.buttonType}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectApps;
