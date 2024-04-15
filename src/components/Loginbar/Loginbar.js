import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import styles from "./Loginbar.module.css";

const Loginbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  return (
    <div className={styles.loginbar}>
      <button onClick={toggleLoginPopup} className={styles.loginButton}>Login</button>
      <button onClick={toggleRegisterPopup} className={styles.registerButton}>Register</button>
      {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
      {showRegisterPopup && <RegisterPopup onClose={toggleRegisterPopup} />}
    </div>
  );
};

export default Loginbar;
