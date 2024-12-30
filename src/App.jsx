import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Route, Routes, useLocation,Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
=======
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin_Navbar from './components/Admin_Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile.jsx'
import Doctors from './pages/Doctors';
import RefreshHandler from './RefreshHandler.jsx';
import Chatbot from './chatbot/chatbot.jsx'
import Admin_Navbar from './components/Admin_Navbar';
import Medicine from './pages/Medicines';
import Dashboard from './Admin_pages/Dashboard';
import Messages from './Admin_pages/Messages';
import Settings from './Admin_pages/Settings';
import Users from './Admin_pages/Users';


import Dashboard from './Admin_pages/Dashboard';
import Messages from './Admin_pages/Messages';
import Settings from './Admin_pages/Settings';
import Users from './Admin_pages/Users';

const App = () => {
  const location = useLocation();
<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState("");
=======
  const [userEmail, setUserEmail] = useState('lavanya@gmail.com'); // Hardcoded email for admin

>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
  const isAuthPage =
    location.pathname === '/Medora/signup' ||
    location.pathname === '/Medora/login' ||
    location.pathname === '/Medora/doctors';

  const isLoginOrSignup =
    location.pathname === '/Medora/signup' || location.pathname === '/Medora/login';
<<<<<<< HEAD

  const isMedicinesPage = location.pathname === '/Medora/medicines';
=======
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the location changes
  }, [location]);

  return (
    <>
<<<<<<< HEAD
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      {/* Conditional Navbar */}
      {isAuthenticated === "6304330681" ? <Admin_Navbar /> : !isAuthPage && <Navbar />}
=======
      {/* Conditional Navbar */}
      {userEmail === 'lavanya@gmail.com' ? <Admin_Navbar /> : !isAuthPage && <Navbar />}
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615

      {/* Main Content Container */}
      <div
        className={isAuthPage ? 'no-margin' : 'page-container'}
        style={{
          marginLeft: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
          marginRight: isLoginOrSignup ? '0' : '2cm', // No margin for login/signup pages
        }}
      >
        <Routes>
<<<<<<< HEAD
          {isAuthenticated === '6304330681' ? (
            // Admin Routes
            <>
              <Route path="/Medora/" element={<Navigate to="/Medora/dashboard" replace />} />
              <Route path="/Medora/home" element={<Navigate to="/Medora/dashboard" replace />} />
=======
          {userEmail === 'lavanya@gmail.com' ? (
            // Admin Routes
            <>
              <Route path="/Medora/" element={<Navigate to="/Medora/dashboard" replace />} />
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
              <Route path="/Medora/dashboard" element={<Dashboard />} />
              <Route path="/Medora/messages" element={<Messages />} />
              <Route path="/Medora/settings" element={<Settings />} />
              <Route path="/Medora/users" element={<Users />} />
            </>
          ) : (
            // Regular User Routes
            <>
              <Route path="/Medora/" element={<Home />} />
<<<<<<< HEAD
              <Route path="/Medora/home" element={<Home />} />
              <Route path="/Medora/bot" element={<Chatbot />} />
=======
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
              <Route path="/Medora/signup" element={<Signup />} />
              <Route path="/Medora/login" element={<Login />} />
              <Route path="/Medora/contact" element={<Contact />} />
              <Route path="/Medora/about" element={<About />} />
              <Route path="/Medora/doctors" element={<Doctors />} />
<<<<<<< HEAD
              <Route path="/Medora/medicines" element={<Medicine />} />
=======
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
            </>
          )}
        </Routes>

<<<<<<< HEAD
        {/* Footer for non-auth pages and excluding /medicines */}
        {!isAuthPage && !isMedicinesPage && <Footer />}
=======
        {/* Footer for non-auth pages */}
        {!isAuthPage && <Footer />}
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
      </div>
    </>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> fbeede9d9f74bb4edfebd4c9ce9fe96d6ec30615
