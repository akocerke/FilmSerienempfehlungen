import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import styles from "./Loginbar.module.css";

import {logout} from "../../apiUser";

const Loginbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const navigate = useNavigate(); // React Router Hook für die Navigation

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
    setShowRegisterPopup(false);
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
    setShowLoginPopup(false);
  };

  const handleLogout = async () => {
    console.log("Logging out..."); // Konsolenausgabe im Browser
    try {
      await logout();  // Sendet die Logout-Anfrage an den Server
      localStorage.removeItem('token'); // Entfernt den Token aus dem lokalen Speicher
      console.log(localStorage.getItem('token'));
      console.log("Redirecting to home page"); // Weitere Konsolenausgabe
      navigate('/'); // Weiterleitung zur Startseite oder Login-Seite
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.loginbar}>
      <button onClick={toggleLoginPopup} className={styles.loginButton}>Login</button>
      <button onClick={toggleRegisterPopup} className={styles.registerButton}>Register</button>
      <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
      {showRegisterPopup && <RegisterPopup onClose={toggleRegisterPopup} showLoginPopup={setShowLoginPopup} />}
    </div>
  );
};

export default Loginbar;
