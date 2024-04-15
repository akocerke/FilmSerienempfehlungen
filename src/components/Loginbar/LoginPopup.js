import React from "react";
import styles from "./Popup.module.css";

const LoginPopup = ({ onClose }) => {
  const handlePopupClick = (event) => {
    event.stopPropagation(); // Verhindert das Schließen des Popups, wenn ein Klick innerhalb des Popups erfolgt
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={handlePopupClick}>
          {/* Hier den Popup-Inhalt einfügen */}
          <h2>Login</h2>
          <form>
            <label>
              Benutzername:
              <input type="text" />
            </label>
            <label>
              Passwort:
              <input type="password" />
            </label>
            <button type="submit" className={styles.button}>Login</button>
            <button type="button" onClick={onClose} className={styles.button}>Schließen</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
