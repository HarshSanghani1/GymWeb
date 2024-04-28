// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header>
//       <h1><center>Real Life Reps Gym</center></h1>
//       <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/" exact>Home</Link>
//           </li>
//           <li>
//             <Link to="/Login">Login</Link>
//           </li>
//           <li>
//             <Link to="/Register">Register</Link>
//           </li>
//           <li>
//             <Link to="/About">About us</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/Services">Services</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Real Life Reps Gym</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" exact>Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
