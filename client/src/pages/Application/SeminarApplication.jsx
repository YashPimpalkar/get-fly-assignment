import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm.jsx';
import "./seminarapplication.css"
import { format } from 'date-fns';

const SeminarApplications = () => {
  const [seminars, setSeminars] = useState([]);
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/seminars/find/future')
      .then(response => {
        setSeminars(response.data);
      })
      .catch(error => console.error('Error fetching seminars:', error));
  }, []);

  const handleApply = (seminarId) => {
    setSelectedSeminar(seminarId);
    setShowRegistration(true);
  };
  useEffect(() => {
    axios.get('http://localhost:8000/api/seminars/find/future')
      .then(response => {
        setSeminars(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd-MM-yyyy'); // Format date as YYYY-MM-DD
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'HH:mm'); // Format time as HH:mm
  };

  return (
    <div className="seminar-applications-section main-container">
      <h2>Seminar Applications</h2>
      <div className="seminar-list">
        {seminars.map(seminar => (
          <div key={seminar.id} className="seminar-card">
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
            <p><strong>Date:</strong> {formatDate(seminar.timings)}</p>
            <p><strong>Time:</strong> {formatTime(seminar.timings)}</p>
            <p><strong>Venue:</strong> {seminar.venue}</p>
            <button onClick={() => handleApply(seminar.id)} className="apply-button">Apply</button>
          </div>
        ))}
      </div>
      {showRegistration && (
        <RegistrationForm
          seminarId={selectedSeminar}
          onClose={() => setShowRegistration(false)}
        />
      )}
    </div>
  );
};

export default SeminarApplications;
