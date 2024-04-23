import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
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
      setUser({ token });  
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
