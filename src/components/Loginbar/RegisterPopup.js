import React from "react";
import styles from "./Popup.module.css";

const RegisterPopup = ({ onClose }) => {
  const handlePopupClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={handlePopupClick}>
          <h2>Register</h2>
          <form>
            <label>
              Benutzername:
              <input type="text" />
            </label>
            <label>
              Passwort:
              <input type="password" />
            </label>
            <button type="submit" className={styles.button}>Register</button>
            <button type="button" onClick={onClose} className={styles.button}>Schließen</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
