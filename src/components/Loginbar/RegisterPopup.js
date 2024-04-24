// RegisterPopup.js
import React, { useState } from "react";
import styles from "./Popup.module.css";
import { register } from "../../apiUser";

const RegisterPopup = ({ onClose, showLoginPopup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handlePopupClick = (event) => {
    event.stopPropagation(); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Versuche, den Benutzer zu registrieren
      await register({ username, password });
      // Öffne das Login-Popup und schließe das Registrierungs-Popup
      showLoginPopup(true);
      onClose();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Wenn der Fehler vom Server kommt und ein 400-Statuscode ist,
        // bedeutet dies, dass der Benutzername bereits vorhanden ist
        setError("Benutzername bereits vergeben. Bitte wählen Sie einen anderen Benutzernamen.");
      } else {
        // Ansonsten handle andere Fehler
        setError("Du hast dich erfolgreich registreiet. Bitte Melde dich an :)");
      }
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={handlePopupClick}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Benutzername:
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </label>
            <label>
              Passwort:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button}>Register</button>
            <button type="button" onClick={onClose} className={styles.closeButton}>Schließen</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
