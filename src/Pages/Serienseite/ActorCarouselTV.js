import React, { useState, useEffect, useRef } from "react";
import styles from "./ActorCarouselTV.module.css";
import { fetchSeriesActors } from "../../apiService";

const ActorCarouselTV = ({ seriesId }) => {
  const [actors, setActors] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchActorsData = async () => {
      try {
        const fetchedActors = await fetchSeriesActors(seriesId);
        setActors(fetchedActors);
      } catch (error) {
        console.error("Fehler beim Abrufen von Schauspielern", error);
      } 
    };

    fetchActorsData();
  }, [seriesId]);

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const { clientWidth } = carousel;
    const scrollOffset = 30;

    if (e.clientX > clientWidth - 100) {
      carousel.scrollLeft += scrollOffset;
    }
  };

  return (
    <div 
      className={styles.carrusel}
      onMouseMove={handleMouseMove}
      ref={carouselRef}
    >
      <h2 className={styles.actortitle}>Schauspieler</h2>
      <div className={styles.carruselContainer}>
        {actors.map((actor) => (
          <div key={actor.id} className={styles.gridItemContent}>
            <div className={styles.gridItem}>
              <img
                src={actor.profile_path ? `https://media.themoviedb.org/t/p/w220_and_h330_face/${actor.profile_path}` : 'https://via.placeholder.com/220x330'}
                alt={actor.name}
              />
            </div>
            <div className={styles.beschreibung}>
              <div className={styles.titleContainer}>
                <h5 className={styles.title}>{actor.name}</h5>
              </div>
              <div className={styles.releasedateContainer}>
                <p className={styles.releasedate}>{actor.character}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorCarouselTV;
