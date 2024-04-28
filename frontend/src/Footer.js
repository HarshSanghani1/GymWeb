// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; gymwebsite 2024 </p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis velit non neque tincidunt tristique.</p>
        </div>
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} gymwebsite</p>
      </div>
    </footer>
  );
};

export default Footer;
