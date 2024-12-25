import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin_Navbar from './components/Admin_Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Doctors from './pages/Doctors';

import Dashboard from './Admin_pages/Dashboard';
import Messages from './Admin_pages/Messages';
import Settings from './Admin_pages/Settings';
import Users from './Admin_pages/Users';

const App = () => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState('lavanya@gmail.com'); // Hardcoded email for admin

  const isAuthPage =
    location.pathname === '/Medora/signup' ||
    location.pathname === '/Medora/login' ||
    location.pathname === '/Medora/doctors';

  const isLoginOrSignup =
    location.pathname === '/Medora/signup' || location.pathname === '/Medora/login';

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the location changes
  }, [location]);

  return (
    <>
      {/* Conditional Navbar */}
      {userEmail === 'lavanya@gmail.com' ? <Admin_Navbar /> : !isAuthPage && <Navbar />}

      {/* Main Content Container */}
      <div
        className={isAuthPage ? 'no-margin' : 'page-container'}
        style={{
          marginLeft: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
          marginRight: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
        }}
      >
        <Routes>
          {userEmail === 'lavanya@gmail.com' ? (
            // Admin Routes
            <>
              <Route path="/Medora/" element={<Navigate to="/Medora/dashboard" replace />} />
              <Route path="/Medora/dashboard" element={<Dashboard />} />
              <Route path="/Medora/messages" element={<Messages />} />
              <Route path="/Medora/settings" element={<Settings />} />
              <Route path="/Medora/users" element={<Users />} />
            </>
          ) : (
            // Regular User Routes
            <>
              <Route path="/Medora/" element={<Home />} />
              <Route path="/Medora/signup" element={<Signup />} />
              <Route path="/Medora/login" element={<Login />} />
              <Route path="/Medora/contact" element={<Contact />} />
              <Route path="/Medora/about" element={<About />} />
              <Route path="/Medora/doctors" element={<Doctors />} />
            </>
          )}
        </Routes>

        {/* Footer for non-auth pages */}
        {!isAuthPage && <Footer />}
      </div>
    </>
  );
};

export default App;
