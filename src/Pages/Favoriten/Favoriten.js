import React, { useState, useEffect } from "react";
import { getFavoritesByUserId } from "../../apiUser";


const Favoriten = ({ userId }) => {
  const [favoriten, setFavoriten] = useState([]);

  useEffect(() => {
    const fetchFavoriten = async () => {
      try {
        const favoritenData = await getFavoritesByUserId(userId);
        setFavoriten(favoritenData.movieIds);
      } catch (error) {
        console.error("Fehler beim Abrufen der Favoriten:", error);
      }
    };
    fetchFavoriten();
  }, [userId]);

  return (
    <div>
      <h2>Deine Favoriten</h2>
      <ul>
        {favoriten.map((movieId) => (
          <li key={movieId}>{movieId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favoriten;
