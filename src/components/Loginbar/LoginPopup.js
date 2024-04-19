import React, { useState } from "react";
import styles from "./Popup.module.css";
import { login } from "../../apiUser"; // Importiere die login-Funktion aus apiUser.js

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Formulars

    try {
      const response = await login({ username, password }); // Rufe die login-Funktion auf und übergib Benutzername und Passwort
      console.log(response); // Hier kannst du die Antwort des Backends verarbeiten, z.B. den Token speichern oder den Benutzer einloggen
      onClose(); // Schließe das Popup nach erfolgreichem Login
    } catch (error) {
      setError("Fehler beim Login: Benutzername oder Passwort ungültig"); // Behandle Login-Fehler
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={handlePopupClick}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Benutzername:
              <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
