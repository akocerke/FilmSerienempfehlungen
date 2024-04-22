// apiUser.js
import axios from 'axios';

const apiUser = axios.create({
  baseURL: "http://localhost:3030/filmrausch",
});


// Funktion zum Einloggen
export const login = async (credentials) => {
  try {
    const response = await apiUser.post('/auth/login', credentials); // POST-Anfrage an den Login-Endpunkt
    const { token } = response.data; // Extrahiere nur den Token aus der Antwort

    if (!token) {
      throw new Error("Login fehlgeschlagen: Kein Token erhalten");
    }

    // Speichere den Token im localStorage
    localStorage.setItem('token', token);

    return token; // Gebe den Token zurück
  } catch (error) {
    console.error('Login Fehler:', error);
    throw error; // Fehler weiterleiten oder behandeln
  }
};

// Funktion zur Registrierung
export const register = async (userData) => {
  try {
    const response = await apiUser.post('/auth/register', userData); // POST-Anfrage an den Register-Endpunkt
    return response.data; // Antwort des Backends zurückgeben
  } catch (error) {
    throw error; // Fehler weiterleiten oder behandeln
  }
};

 // Funktion zum Ausloggen
export const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Logout fehlgeschlagen: Kein Token gefunden");
    }

    const response = await apiUser.post('/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    localStorage.removeItem('token'); // Entfernt den Token aus dem lokalen Speicher
    return response.data; // Antwort des Backends zurückgeben
  } catch (error) {
    console.error('Logout Fehler:', error);
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
