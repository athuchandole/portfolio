import React from 'react';
import './apps.css';

// Import images
import attendanceImg from '../assets/Projects/1.png';
import codeCraftImg from '../assets/Projects/2.png';
import webSphereImg from '../assets/Projects/2.png';
import mobileSyncImg from '../assets/Projects/1.png';

const ProjectApps = () => {
  const projects = [
    {
      id: 1,
      name: 'Attendance Application',
      description: 'Powerful task management application',
      icon: attendanceImg,
      category: 'In Java and xml',
      rating: 4.5,
      downloads: '10K+',
      buttonType: 'Install'  // Set button type for this project
    },
    {
      id: 2,
      name: 'CodeCraft',
      description: 'Advanced code editor for developers',
      icon: codeCraftImg,
      category: 'Development',
      rating: 4.7,
      downloads: '50K+',
      buttonType: 'View'  // Set button type for this project
    },
    {
      id: 3,
      name: 'WebSphere',
      description: 'Comprehensive web browsing experience',
      icon: webSphereImg,
      category: 'Utilities',
      rating: 4.3,
      downloads: '25K+',
      buttonType: 'Download'  // Set button type for this project
    },
    {
      id: 4,
      name: 'MobileSync',
      description: 'Cross-platform mobile synchronization tool',
      icon: mobileSyncImg,
      category: 'Communication',
      rating: 4.6,
      downloads: '15K+',
      buttonType: 'Install'  // Set button type for this project
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={ 
              index < fullStars ? 'star full' : 
              (halfStar && index === fullStars) ? 'star half' : 'star empty'
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="project-apps-container">
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
            </div>
            
            <div className="app-footer">
              <div className="app-rating">
                {renderStars(app.rating)}
                <span className="rating-text">
                  {app.rating} ({app.downloads})
                </span>
              </div>
              
              <button className="app-button">
                {app.buttonType === 'Install' && 'Install'}
                {app.buttonType === 'View' && 'View'}
                {app.buttonType === 'Download' && 'Download'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectApps;
