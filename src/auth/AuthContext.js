import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          token,
          ...decoded
        }); // Gespeichert werden nun auch die dekodierten Benutzerdaten
      } catch (error) {
        console.error('Fehler beim Decodieren des Tokens', error);
      }
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    try {
      const decoded = jwtDecode(userData.token);
      setUser({
        token: userData.token,
        ...decoded
      });
    } catch (error) {
      console.error('Fehler beim Decodieren des Tokens', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,setUser, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
