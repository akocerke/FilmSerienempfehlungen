import React from "react";
import styles from "./SeriesOverviewPopup.module.css";

const SeriesOverviewPopup = ({ series, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
        <h2>{series.name}</h2>
        {series.overview ? (
          <p>{series.overview}</p>
        ) : (
          <p>Keine Beschreibung verfügbar</p>
        )}
        <button onClick={onClose} className={styles.closeButton}>Schließen</button>
      </div>
    </div>
  );
};

export default SeriesOverviewPopup;
