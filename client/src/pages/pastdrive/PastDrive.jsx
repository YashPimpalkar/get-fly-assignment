import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./PastDrive.css"

const PastDrives = () => {
  const [drives, setDrives] = useState([]);
  useEffect(() => {
    axios.get('https://mysql-server-yash.vercel.app/api/drives/past')
      .then(response => {
        setDrives(response.data); 
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="main-section main-container" id="past-drives">
      <h2>Past Placement Drives</h2>
      <div className="drive-list">
        {drives?drives.map(drive => (
          <div key={drive.id} className="drive-card anim">
            <h3>{drive.company_name}</h3>
            <p>{drive.job_description}</p>
            <p>Attended Students: {drive.attended_stu}</p>
            <a href={drive.docLink} target="_blank" rel="noopener noreferrer" className='apply-button'>View Document</a>
        
          </div>
        )):"Loading..."}
      </div>
    </div>
  );
};

export default PastDrives;