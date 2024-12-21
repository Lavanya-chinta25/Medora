import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Doctors from './pages/Doctors';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/Medora/signup' || location.pathname === '/Medora/login' || location.pathname === '/Medora/doctors';
  const isHomePage = location.pathname === '/Medora/';
  const isLoginOrSignup = location.pathname === '/Medora/signup' || location.pathname === '/Medora/login';

  return (
    <>
      {/* Only render the Navbar on non-authentication pages */}
      {!isAuthPage && <Navbar />}

      {/* Main Content Container */}
      <div
        className={isAuthPage ? 'no-margin' : 'page-container'}
        style={{
          marginLeft: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
          marginRight: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
          paddingTop: isHomePage ? '60px' : '0', // Apply padding-top only for Home page
          transition: 'padding-top 0.3s ease-out', // Smooth transition for scroll
        }}
      >
        <Routes>
          <Route path="/Medora/" element={<Home />} />
          <Route path="/Medora/signup" element={<Signup />} />
          <Route path="/Medora/login" element={<Login />} />
          <Route path="/Medora/contact" element={<Contact />} />
          <Route path="/Medora/about" element={<About />} />
          <Route path="/Medora/doctors" element={<Doctors />} />
        </Routes>
        {!isAuthPage && <Footer />}
      </div>
    </>
  );
};
 
export default App;
