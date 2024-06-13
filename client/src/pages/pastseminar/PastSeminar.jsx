

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import "./pastseminar.css"
const PastSeminar = () => {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    axios.get('https://mysql-server-yash.vercel.app/api/seminars/find/past')
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
    <div className="main-section main-container">
      <h2>Past Seminars</h2>
      <div className="seminar-list">
        {seminars.map(seminar => (
          <div key={seminar.id} className="seminar-card">
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
            <p><strong>Date:</strong> {formatDate(seminar.timings)}</p>
            <p><strong>Time:</strong> {formatTime(seminar.timings)}</p>
            <p><strong>Venue:</strong> {seminar.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastSeminar
