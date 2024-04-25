// apiUser.js
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

const apiUser = axios.create({
  baseURL: "http://3.71.80.50:3030/filmrausch",
});

// Funktion zum Einloggen
export const login = async (credentials) => {
  try {
    const response = await apiUser.post("/auth/login", credentials); // POST-Anfrage an den Login-Endpunkt
    const { token } = response.data; // Extrahiere nur den Token aus der Antwort

    if (!token) {
      throw new Error("Login fehlgeschlagen: Kein Token erhalten");
    }

    // Speichere den Token im localStorage
    localStorage.setItem("token", token);

    return token; // Gebe den Token zurück
  } catch (error) {
    console.error("Login Fehler:", error);
    throw error; // Fehler weiterleiten oder behandeln
  }
};

// Funktion zur Registrierung
export const register = async (userData) => {
  try {
    const response = await apiUser.post("/auth/register", userData); // POST-Anfrage an den Register-Endpunkt
    return response.data; // Antwort des Backends zurückgeben
  } catch (error) {
    throw error; // Fehler weiterleiten oder behandeln
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Logout fehlgeschlagen: Kein Token gefunden");
    }

    // Dekodieren des Tokens, um die Benutzer-ID zu erhalten
    const decodedToken = jwtDecode(token);
    console.log("APIUser Benutzer-ID:", decodedToken.id);  // Stellen Sie sicher, dass 'id' der korrekte Schlüssel ist

    // Serverseitigen Logout durchführen
    const response = await apiUser.post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Entfernen des Tokens aus dem lokalen Speicher
    localStorage.removeItem("token");
    
    return response.data;  // Antwort des Backends zurückgeben
  } catch (error) {
    console.error("Logout Fehler:", error);
    throw error;  // Fehler weiterleiten oder behandeln
  }
};

// Funktion zum Hinzufügen von Favoriten
export const addFavorite = async ({ userId, movieId, seriesId }) => {
  try {
    const response = await apiUser.post('/favorites/add', { userId, movieId, seriesId }); // POST-Anfrage an den Favoriten-Hinzufügen-Endpunkt
    return response.data; // Antwort des Backends zurückgeben
  } catch (error) {
    throw error; // Fehler weiterleiten oder behandeln
  }
};

// Funktion um alle Favoriten eines Benutzers anhand der Benutzer-ID zurückzugeben
export const getFavoritesByUserId = async (userId) => {
  try {
    const response = await apiUser.get(`/favorites/byUserId/${userId}`);
    if (response.data && response.data.movieIds.length === 0 && response.data.seriesIds.length === 0) {
      throw new Error("😮 Keine Favoriten vorhanden.");
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      // Benutzen der spezifischen Fehlermeldung vom Server
      throw new Error(error.response.data.message || "Ein unbekannter Fehler ist aufgetreten.");
    } else {
      // Behandlung von Fällen, in denen keine Antwort vom Server erhalten wurde
      throw new Error("Der Server ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.");
    }
  }
};



// Funktion um Favoriten zu löschen anhand der UserId => movie_id oder series_id
export const deleteFavoritesByUserId = async (userId, movieId, seriesId) => {
  try {
    // entweder movieId oder seriesId aber nicht beide.
    const data = {
      userId
    };
    if (movieId) {
      data.movieId = movieId;
    } else if (seriesId) {
      data.seriesId = seriesId;
    }
    const response = await apiUser.delete('/favorites/delete', {
      data: data
    });
    return response.data; // Antwort des Backends zurückgeben
  } catch (error) {
    throw error; // Fehler weiterleiten oder behandeln
  }
};

export default apiUser;
