import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-regular-svg-icons';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-brand"]}>
          <img src="logo.png" alt="FilmRausch Logo" className={styles["navbar-logo"]}/>
          {/* <span className={styles["navbar-title"]}>FilmRausch</span> */}
        </div>
        <div className={styles.linkContainer}>
          <ul className={styles["navbar-menu"]}>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
              <FontAwesomeIcon icon={faHome} /> Startseite
              </a>
            </li>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
              <FontAwesomeIcon icon={faNewspaper} /> Neuheiten
              </a>
            </li>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
               <FontAwesomeIcon icon={faFilm} /> Filme
              </a>
            </li>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
              <FontAwesomeIcon icon={faTv} /> Serien
              </a>
            </li>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
              <FontAwesomeIcon icon={faSearch} /> Suche
              </a>
            </li>
            <li className={styles["navbar-item"]}>
              <a href="#" className={styles["navbar-link"]}>
              <FontAwesomeIcon icon={faStar} />
              </a>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
