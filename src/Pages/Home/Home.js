import React from "react";
import styles from "./Home.module.css";
import Content from "../../components/Content/Content"

function Home() {
  return (
    <Content>
    <div className={styles.popcorncss}>
      <div className={styles.popcorncss2}>
        <h1 className={styles.popkorn}>Willkommen im Filmrausch!</h1>
        <h2 className={styles.popkorn1}>
          Dein Portal zur ultimativen Film- und Seriendatenbank.
        </h2>
        <h2 className={styles.popkorn1}>
          Bereit, deine nächste Lieblingsproduktion zu finden?
        </h2> 
      </div>
    </div>
    </Content>
  );
}

export default Home;
