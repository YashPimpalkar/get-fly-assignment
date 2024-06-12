import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./application.css" // Make sure to import your CSS file

const Drives = () => {
  const [currentDrives, setCurrentDrives] = useState([]);
  const [pastDrives, setPastDrives] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/drives/latest')
      .then(response => setCurrentDrives(response.data))
      .catch(error => console.error('Error fetching current drives:', error));

    axios.get('http://localhost:8000/api/drives/past')
      .then(response => setPastDrives(response.data))
      .catch(error => console.error('Error fetching past drives:', error));
  }, []);

  const handleApply = (driveId) => {
    // Open registration form and pass driveId
    console.log(`Applying for drive ID: ${driveId}`);
  };

  return (
    <div className="main-section main-container">
      <h2>Current Placement Drives</h2>
      <div className="drive-list">
        {currentDrives.map(drive => (
          <div key={drive.id} className="drive-card">
            <h3>{drive.company_name}</h3>
            <p>{drive.job_description}</p>
            <div className="button-container">
    <button onClick={() => handleApply(drive.id)} className='apply-button apply-button-left'>Apply</button>
    <a href={drive.docLink} target="_blank" rel="noopener noreferrer" className='apply-button apply-button-right'>View Document</a>
  </div>
          </div>
        ))}
      </div>

      <h2>Past Placement Drives</h2>
      <div className="drive-list">
        {pastDrives.map(drive => (
          <div key={drive.id} className="drive-card">
            <h3>{drive.company_name}</h3>
            <p>{drive.job_description}</p>
            <a href={drive.docLink} target="_blank" rel="noopener noreferrer" className='apply-button'>View Document</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drives;
