import React from "react";
import styles from "./Popup.module.css";

const LoginPopup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
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
  );
};

export default LoginPopup;
