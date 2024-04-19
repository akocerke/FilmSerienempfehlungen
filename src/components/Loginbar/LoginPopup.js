// Importe
import React, { useState } from "react";
import styles from "./Popup.module.css";
import { login } from "../../apiUser";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

// Komponente
const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

// Handle login response
const handleLoginResponse = (response) => {
  const { id } = response; // Extrahiere die Benutzer-ID aus der Antwort
  console.log("Benutzer-ID:", id);

  // Zeige einen Erfolgstoast an
  toast.success(`Erfolgreich eingeloggt als ${response.username}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // Weiterleitung auf die Favoriten-Seite mit der Benutzer-ID
  window.location.href = `/favoriten/${id}`;
};

// handleSubmit Funktion
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await login({ username, password });
    console.log("Login Response:", response);
    onClose();

    // Behandle die Login-Antwort
    handleLoginResponse(response);
  } catch (error) {
    setError("Fehler beim Login: Benutzername oder Passwort ungültig");
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

// Toast-Container außerhalb der Komponente rendern
<ToastContainer />
