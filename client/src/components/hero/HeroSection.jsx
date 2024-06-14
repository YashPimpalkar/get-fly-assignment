import React from 'react';
import './herosection.css'; // Import the CSS file

// const HeroSection = ({ providedSeminars, attendedSeminars }) => {
    const HeroSection = () => {
    const providedSeminars = 10;
    const attendedSeminars = 800;
  return (
    <div className="hero hero-container anim">
      <h1>Welcome to Our Seminar Dashboard</h1>
      <p>This section contains the number of seminars the organization has provided to the students and the number of seminars students have attended.</p>
      <div className="seminar-stats">
        <div className="seminar-stat anim">
          <h2>NO. of Seminars Provided By Organization</h2>
          <span>{providedSeminars}</span>
        </div>
        <div className="seminar-stat anim"> 
          <h2>NO. of Seminars Attended BY Students</h2>
          <span>{attendedSeminars}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
