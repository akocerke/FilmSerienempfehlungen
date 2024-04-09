import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles["fondo"]}>
      <h1>Willkommen</h1>
      <h2>
        Millionen von Filmen, Serien und Menschen zu entdecken. Jetzt erkunden.
      </h2>
    </div>
  );
}

export default Home;
