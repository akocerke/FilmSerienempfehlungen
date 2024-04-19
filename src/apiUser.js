// apiUser.js
import axios from 'axios';

const apiUser = axios.create({
  baseURL: "http://localhost:3030/filmrausch",
});


// Funktion zum Einloggen
export const login = async (credentials) => {
  try {
    const response = await apiUser.post('/auth/login', credentials); // POST-Anfrage an den Login-Endpunkt
    const userData = response.data.user; // Extrahiere Benutzerdaten aus der Antwort
    return userData; // Benutzerdaten zurückgeben
  } catch (error) {
    throw error; // Fehler weiterleiten oder behandeln
  }
};



// Funktion um alle Favoriten eines Benutzers anhand der Benutzer-ID zurückzugeben
export const getFavoritesByUserId = async (userId) => {
    try {
      const response = await apiUser.get(`/favorites/byUserId/${userId}`); 
      return response.data; // Antwort des Backends zurückgeben
    } catch (error) {
      throw error; // Fehler weiterleiten oder behandeln
    }
  };
  



export default apiUser;
