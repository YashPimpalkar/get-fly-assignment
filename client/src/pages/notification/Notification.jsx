import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('https://mysql-server-yash.vercel.app/api/notice')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return (
    <div className="notification-section notice-container ">
       <div className='anim'>
       <h2 className='heading'>Latest Updates</h2>
       </div>
      <div className="notification-list">
        {notifications.map(notification => (
          <div key={notification.id} className="notification-card">
           <div className="notification-info">
              <h3>{notification.title}</h3>
              <p>{notification.update_content}</p>
            </div>
            <p className='date'><strong>Date:</strong> {new Date(notification.update_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
