import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../../src/apiService";
import { addFavorite, deleteFavoritesByUserId, getFavoritesByUserId } from "../../apiUser";
import styles from "./Filmseite.module.css";
import Content from "../../components/Content/Content";
import ActorCarousel from "./ActorCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"; 
import TrailerPopup from "./TrailerPopup";

const formatDateGerman = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('de-DE', options);
};

const formatPercentage = (rating) => {
  return `${Math.round(rating * 10)}%`; 
};

const Filmseite = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [showTrailerPopup, setShowTrailerPopup] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    fetchMovieData();
  }, [id]);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
    
      const userData = decodeToken(token);
      if (!userData || !userData.id) return;
    
      const userId = userData.id;
      console.log("UserID:", userId);
      console.log("MovieID:", id);
      
      try {
        const userFavorites = await getFavoritesByUserId(userId);
        console.log('Favoriten des Benutzers:', userFavorites);
    
        const isItemFavorite = userFavorites && Array.isArray(userFavorites.movieIds) && userFavorites.movieIds.includes(parseInt(id));
    
        console.log("Is favorite:", isItemFavorite);
    
        setIsFavorite(!!isItemFavorite);
        setIsLoading(false);
      } catch (error) {
        console.error('Fehler beim Überprüfen der Favoriten:', error);
        setIsLoading(false);
      }
    };
    
    checkFavoriteStatus();
  }, [id]);

  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Fehler beim Decodieren des Tokens:", error);
      return null;
    }
  };

  const handleAddFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Benutzer nicht authentifiziert oder Token nicht gefunden!");
        return;
      }
      
      const userData = decodeToken(token);
      if (!userData || !userData.id) {
        console.error("Benutzerdaten nicht gefunden!");
        return;
      }
      
      const userId = userData.id;
  
      if (isFavorite) {
        await deleteFavoritesByUserId(userId, id, null); 
        setIsFavorite(false);
        console.log("Is favorite state:", false);
      } else {
        await addFavorite({ userId: userId, movieId: id });
        setIsFavorite(true);
        console.log("Is favorite state:", true);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen oder Entfernen zum/vom Favoriten:', error);
    }
  };
  
  if (!movie) {
    return <div>Laden...</div>;
  }

  return (
    <Content>
      <div className={styles.container}>
        <div className={styles.moviedetails}>
          <h2 className={styles.title}>{movie.title}</h2>
          <img className={styles.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
          <h2 className={styles.tagline}>{movie.tagline}</h2>
          <h3 className={styles.status}>{movie.status}</h3>
            <div className={styles.ButtonBox}>
              <button onClick={handleAddFavorite} className={styles.favoriteButton} title={isFavorite ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}>
                {isLoading ? (
                  <div>Bitte Einloggen oder Registrieren, um Favoriten hinzuzufügen</div>
                ) : (
                  isFavorite ? (
                    <FontAwesomeIcon icon={faStarSolid} /> 
                  ) : (
                    <FontAwesomeIcon icon={faStar} />
                  )
                )}
              </button>
              <button onClick={() => setShowTrailerPopup(true)} className={styles.trailerButton}>Trailer anzeigen</button>
          </div>
          <p className={styles.overview}>{movie.overview ? `${movie.overview}` : "Keine Beschreibung verfügbar"}</p>
          <ActorCarousel movieId={id} />
          <div className={styles.info}>
            <p className={styles.releasedate}>Release Date: {formatDateGerman(movie.release_date)}</p>
            <p className={styles.rating}>
                Rating: <span className={`${styles.circle} ${movie.vote_average >= 5 ? styles.green : styles.red}`}>{formatPercentage(movie.vote_average)}</span>
            </p>
            <p className={styles.budget}>Budget: {movie.budget ? `$${movie.budget}` : "Unbekannt"}</p>
            <p className={styles.studio}>Studio: {movie.production_companies && movie.production_companies.map(production_companies => production_companies.name).join(', ')}</p>
            <p className={styles.genres}>Genres: {movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
            <div className={styles.backlinkContainer}>
              <Link to="/filme" className={styles.backlink}>Zurück zu Filme</Link>
              <Link to="/suche" className={styles.backlink}>Suche weitere Filme</Link>
            </div>
        </div>
      </div>
      {showTrailerPopup && <TrailerPopup movieId={id} onClose={() => setShowTrailerPopup(false)} />}
    </Content>
  );
};

export default Filmseite;
