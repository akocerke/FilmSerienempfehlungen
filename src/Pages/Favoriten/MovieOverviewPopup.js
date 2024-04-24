import React from "react";
import styles from "./MovieOverviewPopup.module.css";

const MovieOverviewPopup = ({ movie, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
        <h2>{movie.title}</h2>
        {movie.overview ? (
          <p>{movie.overview}</p>
        ) : (
          <p>Keine Beschreibung verfügbar</p>
        )}
        <button onClick={onClose} className={styles.closeButton}>Schließen</button>
      </div>
    </div>
  );
};

export default MovieOverviewPopup;
