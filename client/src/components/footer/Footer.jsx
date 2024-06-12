import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
       <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>Short description about the company.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="#" class="social-icon">FB</a>
          <a href="#" class="social-icon">TW</a>
          <a href="#" class="social-icon">IG</a>
        </div>
      </div>
      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Yash Pimpalkar. All rights reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer
