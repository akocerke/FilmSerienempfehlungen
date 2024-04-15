import React from "react";
import Content from "../../components/Content/Content";
import styles from "../../Pages/Impressum/Impressum.module.css";

const style = {
  primaryColor: {
    color: "var(--primary-color)",
  },
};

const Impressum = () => {
  return (
    <Content>
      <div className={styles.titel}>
        <h1>Impressum</h1>
      </div>
      <div className={styles.impressum}>
        <div className={styles.Angaben1}>
          <div className={styles.angabenContent1}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <div></div>
            <div>
              <h4>Firma</h4>
            </div>
            <div>
              <p>Filmrausch GmbH</p>
            </div>
            <div>
              <h4>Telefon</h4>
            </div>
            <div>
              <p>+49 123 4567890</p>
            </div>

            <div>
              <h4>Adresse</h4>
            </div>
            <div>
              <p>Musterstraße 123, 12345 Musterstadt</p>
            </div>

            <div>
              <h4>E-mail</h4>
            </div>
            <div>
              <p>info-filmrausch@maxmonster.de</p>
            </div>
          </div>
        </div>
        <div className={styles.Angaben2}>
          <div className={styles.angabenContent2}>
            <h2>Handelsregister</h2>
            <p />
            <div>
              <h4>Registergericht</h4>
            </div>
            <div>
              <p>Amtsgericht Musterstadt</p>
            </div>
            <div>
              <h4>Registernummer</h4>
            </div>
            <div>
              <p>HRB 12345</p>
            </div>

            <div>
              <h4>E-Mail</h4>
            </div>
            <div>
              <p>info-filmrausch@maxmonster.de</p>
            </div>
            <div>
              <h4>Umsatzsteuer-Identifikationsnummer </h4>
              <h4>gemäß § 27 a Umsatzsteuergesetz</h4>
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.Angaben3}>
          <div className={styles.angabenContent3}>
            <h2>Urheberrecht und Marken</h2>
            <div></div>
            <div>
              <h4>
                Alle auf dieser Website <h4>verwendeten Marken und Logos</h4>
                <h4>sind Eigentum ihrer jeweiligen Inhaber.</h4>
              </h4>
            </div>
            <div></div>

            <div>
              <h4>Umsatzsteuer-Identifikationsnummer</h4>
            </div>
            <div>
              <p> DE123456789</p>
            </div>

            <div>
              <h4>Aufsichtsbehörde</h4>
            </div>
            <div>
              <p>Regulierungsbehörde Musterland</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.UnterImpressum}>
        <div className={styles.UnterImpressum1}>
          <h2>Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
          <h4>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter:
            <a href="https://ec.europa.eu/consumers/odr">
              Link zur OS-Plattform
            </a>
          </h4>
        </div>
      </div>
    </Content>
  );
};

export default Impressum;
