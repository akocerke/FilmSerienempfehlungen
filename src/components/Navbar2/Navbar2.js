import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilm,
  faTv,
  faSearch,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./Navbar2.module.css";

const Navbar2 = () => {
  const data = [
    {
      icon: faHome,
      name: "Startseite",
      link: "/",
    },
    {
      icon: faNewspaper,
      name: "Neuheiten",
      link: "/neuheiten",
    },
    {
      icon: faFilm,
      name: "Filme",
      link: "/filme",
    },
    {
      icon: faTv,
      name: "Serien",
      link: "/serien",
    },
    {
      icon: faSearch,
      name: "Suche",
      link: "/suche",
    },
    {
      icon: faStar,
      name: "Favoriten",
      link: "/favoriten",
    },
  ];

  return (
    <div className={styles.navbar}>
      {data.map((Val, index) => (
        <Link key={index} to={Val.link} className={styles.linkTo}>
          <button className={styles.button}>
            <FontAwesomeIcon icon={Val.icon} className={styles.customIcon} />
            <span className={styles.iconText}>{Val.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar2;
