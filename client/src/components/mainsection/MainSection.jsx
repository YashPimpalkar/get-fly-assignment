import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import './main.css';

const MainSection = () => {
  // const [seminars, setSeminars] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/seminars/find/future')
  //     .then(response => {
  //       setSeminars(response.data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd-MM-yyyy'); // Format date as YYYY-MM-DD
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'HH:mm'); // Format time as HH:mm
  };
  const handleApply = (seminarId) => {
    // Handle apply button click event
    alert(`Applied for seminar with ID: ${seminarId}`);
  };

  return (
    <div className="main-section main-container">
      <h2>Latest Seminars</h2>
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
    </div>
  );
};

export default MainSection;
