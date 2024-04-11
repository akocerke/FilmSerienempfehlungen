import React from "react";
import styles from "./Home.module.css";
import Content from '../../components/Content/Content';

function Home() {
  return (
    <Content>
      <div className={styles.popcorncss}>
      <h1 className={styles["popkorn"]}>Willkommen</h1>
      <h2 className={styles["popkorn1"]}>
        Millionen von Filmen, Serien und Menschen zu entdecken. Jetzt erkunden.
      </h2>
    </div>
    </Content>
    
  );
}

export default Home;
