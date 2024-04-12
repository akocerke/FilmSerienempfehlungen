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
        <div className={styles.Angaben}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <div className={styles.angabenContent}>
            <div className={styles.angabenContent2}>
              <h4>Firma</h4>
            </div>
            <div>
              <p>Filmrausch GmbH</p>
            </div>
          </div>

          <p>
            <strong style={{ fontSize: "1.2em" }}>Adresse</strong>{" "}
            <span style={style.primaryColor}>
              {" "}
              Musterstraße 123, 12345 Musterstadt
            </span>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>Telefon</strong>{" "}
            <span style={style.primaryColor}>+49 123 4567890</span>
          </p>

          <p>
            <strong style={{ fontSize: "1.2em" }}>Adresse</strong>{" "}
            <span style={style.primaryColor}>
              Musterstraße 123, 12345 Musterstadt
            </span>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>E-Mail</strong>{" "}
            <span style={style.primaryColor}>
              info-filmrausch@maxmonster.de
            </span>
          </p>
        </div>
        <div ClassName={styles.Handelsregister}>
          <p>
            <strong style={{ fontSize: "1.2em" }}>Handelsregister</strong>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>Registergericht</strong>{" "}
            <span style={style.primaryColor}>Amtsgericht Musterstadt</span>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>Registernummer</strong>{" "}
            <span style={style.primaryColor}> HRB 12345</span>
          </p>

          <p>
            <strong style={{ fontSize: "1.2em" }}>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz
            </strong>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>E-Mail</strong>{" "}
            <span style={style.primaryColor}>
              info-filmrausch@maxmonster.de
            </span>
          </p>
        </div>
        <div ClassName={styles.Urheberrecht}>
          <p>
            <strong style={{ fontSize: "1.2em" }}>
              Urheberrecht und Marken
            </strong>
          </p>
          <p>
            <span style={style.primaryColor}>
              Alle auf dieser Website verwendeten Marken und Logos sind Eigentum
              ihrer jeweiligen Inhaber.{" "}
            </span>
          </p>
          <p>
            <strong style={{ fontSize: "1.2em" }}>
              Umsatzsteuer-Identifikationsnummer
            </strong>
            <span style={style.primaryColor}>DE123456789</span>
          </p>

          <p>
            {" "}
            <strong style={{ fontSize: "1.2em" }}>Aufsichtsbehörde</strong>
          </p>
          <p>
            {" "}
            <span style={style.primaryColor}>
              Regulierungsbehörde Musterland
            </span>
          </p>
        </div>
      </div>
      <div className={styles.UnterImpressum}>
        <div className={styles.UnterImpressum1}>
          <p>
            <strong style={{ fontSize: "1.2em" }}>
              Plattform der EU-Kommission zur Online-Streitbeilegung
            </strong>
          </p>
          <p>
            {" "}
            <span style={style.primaryColor}>
              {" "}
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie
              unter:
              <a href="https://ec.europa.eu/consumers/odr">
                Link zur OS-Plattform
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Impressum;
