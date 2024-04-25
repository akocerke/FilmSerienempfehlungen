import React from "react";
import Content from "../../components/Content/Content";
import styles from "./Impressum.module.css";

const Impressum = () => {
  return (
    <Content>
            <h1 className={styles.ueberschrift}>Impressum</h1>
            <hr className={styles.impline} />

      <div className={styles.impressum}>
        <div className={styles.section}>
          <h2>Impressum</h2>
          <hr />
          <div className={styles.content}>
            <div>
              <h3>Firma</h3>
              <p>Filmrausch GmbH</p>
            </div>
            <div>
              <h3>Telefon</h3>
              <p>+49 123 4567890</p>
            </div>
            <div>
              <h3>Adresse</h3>
              <p>Musterstraße 123, 12345 Musterstadt</p>
            </div>
            <div>
              <h3>E-mail</h3>
              <p>info-filmrausch@maxmonster.de</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Handelsregister</h2>
          <hr />
          <div className={styles.content}>
            <div>
              <h3>Registergericht</h3>
              <p>Amtsgericht Musterstadt</p>
            </div>
            <div>
              <h3>Registernummer</h3>
              <p>HRB 12345</p>
            </div>
            <div>
              <h3>E-Mail</h3>
              <p>info-filmrausch@maxmonster.de</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Urheberrecht und Marken</h2>
          <hr />
          <div className={styles.content}>
            <div>
              <h3>Alle auf dieser Website verwendeten Marken und Logos</h3>
              <p>sind Eigentum ihrer jeweiligen Inhaber.</p>
            </div>
            <div>
              <h3>Umsatzsteuer-Identifikationsnummer</h3>
              <p>DE123456789</p>
            </div>
            <div>
              <h3>Aufsichtsbehörde</h3>
              <p>Regulierungsbehörde Musterland</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.platform}>
        <h2>Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter:
          <a href="https://ec.europa.eu/consumers/odr">Link zur OS-Plattform</a>
        </p>
      </div>
    </Content>
  );
};

export default Impressum;
