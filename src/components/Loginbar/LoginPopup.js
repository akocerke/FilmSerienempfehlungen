import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Popup.module.css";
import { login } from "../../apiUser";

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleLoginResponse = (response) => {
    const { id } = response;
    console.log("Benutzer-ID:", id);

    // Navigation zur Favoriten-Seite mit Benutzer-ID
    navigate(`/favoriten/${id}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ username, password });
      console.log("Login Response:", response);
      onClose();
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
