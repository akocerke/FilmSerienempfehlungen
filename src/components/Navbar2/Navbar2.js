import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar2.module.css";
import {faStar} from '@fortawesome/free-regular-svg-icons';


const Navbar2 = () => {
  const data = [
    {
      icon: faStar,
      name: "Startseite",
      link: "/",
    },
    {
      icon: {faStar},
      name: "Neuheiten",
      link: "/neuheiten",
    },
    {
      icon: "fas fa-film",
      name: "Filme",
      link: "/filme",
    },
    {
      icon: "fas fa-tv",
      name: "Serien",
      link: "/serien",
    },
    {
      icon: "fas fa-search",
      name: "Suche",
      link: "/suche",
    },
    {
      icon: "fas fa-star",
      name: "Favoriten",
      link: "/favoriten",
    },
  ];
 return (
    <>
      <div className={styles.navbar}>
            {data.map((Val) => {
              return (
                <>
                  <NavLink to={`${Val.link}`}>
                    <button className={styles.button}>
                      <i className={`${Val.icon}`}></i>
                      <br />
                      <h5 className={styles.navbarlink}>{Val.name}</h5>
                    </button>
                  </NavLink>
                </>
              );
            })}
          </div>
    </>
  );
};

export default Navbar2;
