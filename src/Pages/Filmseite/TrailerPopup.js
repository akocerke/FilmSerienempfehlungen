import React, { useEffect, useState } from "react";
import { fetchMovieTrailer } from "../../apiService";
import styles from "./TrailerPopup.module.css";

const TrailerPopup = ({ movieId, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const data = await fetchMovieTrailer(movieId);
        if (data && data.results && data.results.length > 0) {
          setTrailerKey(data.results[0].key);
        } else {
          console.error("Kein Trailer gefunden.");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen des Trailers:", error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
        {trailerKey ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer nicht verfügbar</p>
        )}
        <button onClick={onClose} className={styles.closeButton}>Schließen</button>
      </div>
    </div>
  );
};

export default TrailerPopup;
