import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSeriesDetails } from "../../apiService";
import styles from "./Serienseite.module.css";

const Serienseite = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null); 
  const [isMovie, setIsMovie] = useState(true); 
  const [isLoading, setIsLoading] = useState(true); // Zustand um den Ladezustand zu verfolgen

  useEffect(() => {
    const fetchData = async () => {
      try {
        let contentData;
        if (!isMovie) {
          contentData = await fetchSeriesDetails(id);
          setContent(contentData);
        }
      } catch (error) {
        console.error("Error fetching content details: ", error);
      } finally {
        setIsLoading(false); // Setze isLoading auf false, wenn die Daten geladen sind
      }
    };
    fetchData();
  }, [id, isMovie]);

  useEffect(() => {
    setIsMovie(window.location.pathname.includes("filme"));
  }, [window.location.pathname]);

  // Prüfe, ob die Daten noch geladen werden
  if (isLoading || !content) {
    return <div className={styles.container}>Am Laden...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.moviedetails}>
        <h2 className={styles.title}>{content.title}</h2>
        <img className={styles.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${content.poster_path}`} alt={content.title} />
        <p className={styles.overview}>{content.overview}</p>
        <p className={styles.releasedate}>Release Date: {content.first_air_date}</p>
        <p className={styles.rating}>Rating: {content.vote_average}</p>
        <Link to="/serien" className={styles.backlink}>Zurück zu Serien</Link>
      </div>
    </div>
  );
};

export default Serienseite;
