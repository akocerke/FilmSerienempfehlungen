import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import styles from "./Loginbar.module.css";
import { useAuth } from '../../auth/AuthContext'; // Pfad anpassen
import {logout as apiLogout} from '../../apiUser';
import {jwtDecode} from 'jwt-decode';


const Loginbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Authentifizierungsstatus und Logout-Funktion aus dem Kontext
  const navigate = useNavigate(); 

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
    setShowRegisterPopup(false);
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
    setShowLoginPopup(false);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log("AuthContext LOGOUT Benutzer-ID:", decodedToken.id);  // Stellen Sie sicher, dass 'id' der korrekte Schlüssel ist
      }

      // Zuerst den serverseitigen Logout durchführen
      await apiLogout();

      // Danach den lokalen Logout durchführen Token löschen
      logout();

      // Nach erfolgreichem Logout zur Startseite navigieren
      navigate('/');

      // Erfolgsmeldung in der Konsole ausgeben
      console.log("Token gelöschen Logout erfolgreich." );
    } catch (error) {
      console.error('Logout failed:', error);
    }
};
  

  return (
    <div className={styles.loginbar}>
      {!isLoggedIn && <button onClick={toggleLoginPopup} className={styles.loginButton}>Login</button>}
      {!isLoggedIn && <button onClick={toggleRegisterPopup} className={styles.registerButton}>Register</button>}
      {isLoggedIn && <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>}
      {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
      {showRegisterPopup && <RegisterPopup onClose={toggleRegisterPopup} />}
    </div>
  );
};

export default Loginbar;
