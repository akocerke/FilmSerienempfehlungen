import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Importieren von jwt-decode
import styles from "./Popup.module.css";
import { login } from "../../apiUser";
import {useAuth} from "../../auth/AuthContext";


const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useAuth(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await login({ username, password });
      console.log("Login erfolgreich, Token erhalten:", token);
      
      // Dekodieren des Tokens, um die Benutzer-ID zu erhalten
      const decodedToken = jwtDecode(token);
      setUser({
        token,
        ...decodedToken
      });
      console.log("Benutzer-ID:", decodedToken.id);

      onClose();  // Schließen des Login-Popups
      navigate(`/favoriten/${decodedToken.id}`);  // Navigation zur Favoriten-Seite mit Benutzer-ID
    } catch (error) {
      console.error("Login Fehler:", error.message);
      setError("Fehler beim Login: " + error.message);
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Benutzername:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Passwort:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button}>Login</button>
            <button type="button" onClick={onClose} className={styles.closeButton}>Schließen</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
