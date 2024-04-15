import React from "react";
import styles from "./Popup.module.css";

const RegisterPopup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
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
  );
};

export default RegisterPopup;
