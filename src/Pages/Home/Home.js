import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.popcorncss}>
      <div className={styles.popcorncss2}>
        <h1 className={styles["popkorn"]}>Willkommen im Filmrausch!</h1>
        <h2 className={styles["popkorn1"]}>
          Millionen von Filmen, Serien und Menschen zu entdecken. Jetzt
          erkunden.
        </h2>
      </div>
    </div>
  );
}

export default Home;
