import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './faqs.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    axios.get('https://mysql-server-yash.vercel.app/api/faqs')
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      axios.post('https://mysql-server-yash.vercel.app/api/faqs', { question: newQuestion })
        .then(response => {
          setFaqs([response.data, ...faqs]);
          setNewQuestion('');
        })
        .catch(error => console.error('Error adding FAQ:', error));
    }
  };

  return (
    <div className="faq-section faq-container">
      
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-card">
            <p><strong>Q:</strong> {faq.question}</p>
            {faq.answer && <p><strong>A:</strong> {faq.answer}</p>}
          </div>
        ))}
      </div>
      <div className="new-question">
        <input
          type="text"
          placeholder="Ask a new question..."
          value={newQuestion}
          onChange={e => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Submit</button>
      </div>
    </div>
  );
};

export default FAQ;
