// // import Login from './Login';
// // import React from 'react';
// // import './App.css';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Register from './Register';

// // function App() {
// //   return (
// //    <BrowserRouter>
// //    <Routes>
// //     <Route path="/" element={<Login />}></Route>
// //     <Route path="/Register" element={<Register />}></Route>

// //    </Routes>
// //    </BrowserRouter>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Services from './Services';
// import Login from './Login';
// import Register from './Register';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <Header className="Header" />
//         <Routes className="Routes">
//           <Route path="/" element={<Home className="Home" />} />
//           <Route path="/Login" element={<Login />}></Route>
//           <Route path="/Register" element={<Register />}></Route>
//           <Route path="/about" element={<About className="About" />} />
//           <Route path="/contact" element={<Contact className="Contact" />} />
//           <Route path="/services" element={<Services className="Services" />} />
//         </Routes>
//         <Footer className="Footer" />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
