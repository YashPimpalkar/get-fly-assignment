import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ seminarId, onClose }) => {
  const [formData, setFormData] = useState({
    collegeId: '',
    email: '',
    mobile: ''
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/seminar-application', {
      seminarId,
      email: formData.email,
      collegeId: formData.collegeId,
      mobile: formData.mobile
    })
    .then(response => {
      if (response.data.alreadyApplied) {
        setAlertMessage('You have already applied for this seminar.');
      } else {
        axios.post('http://localhost:8000/api/seminar-application', {
          seminarId,
          collegeId: formData.collegeId,
          email: formData.email,
          mobile: formData.mobile
        })
        .then(() => {
            
          setAlertMessage('Registration successful!');
          onClose();
        })
        // .catch(error => console.error('Error registering:', error));
      }
    })
    // .catch(error => console.error('Error checking registration:', error));
  };

  return (
    <div className="registration-form">
      <h3>Register for Seminar</h3>
      {alertMessage && <p className="alert">{alertMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="collegeId" placeholder="College ID" value={formData.collegeId} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
