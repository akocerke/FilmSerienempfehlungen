import { Link } from "react-router-dom";
import React from "react";
import styles from "./Footer.module.css"

function Footer() {
  const fechaActual = new Date().getFullYear();

  return (
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <Link to="/">StartSeite</Link>
            </li>
            <li>
              <Link to="/Filme">Filme</Link>
            </li>
            <li>
              <p>&copy; {fechaActual} Filmrausch</p>
            </li>
            <li>
              <Link to="/Serien">Serien</Link>
            </li>
            <li>
              <Link to="/Impressum">Impressum</Link>
            </li>
            <li className={styles.placeholder} />
          </ul>
        </nav>
      </footer>
  );
}

export default Footer;
