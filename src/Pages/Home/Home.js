import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.popcorncss}>
      <div className={styles.popcorncss2}>
        <h1 className={styles["popkorn"]}>Willkommen im Filmrausch!</h1>
        <h2 className={styles["popkorn1"]}>
        Dein Portal zur ultimativen Film- und Seriendatenbank. Entdecke eine schier endlose Auswahl an Titeln und lass dich von der Vielfalt des Films verzaubern. Bereit, deine nächste Lieblingsproduktion zu finden?
        </h2>
      </div>
    </div>
  );
}

export default Home;
