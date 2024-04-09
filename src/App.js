import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startseite from "./Pages/Startseite/Startseite";
import Filme from "./Pages/Filme/Filme";
import Serien from "./Pages/Serien/Serien";
import Suche from "./Pages/Suche/Suche";
import Filmseite from "./Pages/Filmseite/Filmseite";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Error from "./Pages/Error/Error";
import Impressum from "./Pages/Impressum/Impressum";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import Header from './components/Header/Header';
import Pageloader from './components/Pageloader/Pageloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulieren einer Ladezeit
    setTimeout(() => {
      setIsLoading(false);
    }, 4800); // Zum Beispiel 2000ms = 2 Sekunden
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Pageloader />
        ) : (
          <>
            <Header />
            <Navbar2 />
            <Footer />
            <Routes>
              <Route path="/" element={<Startseite />} exact />
              <Route path="/filme" element={<Filme />} />
              <Route path="/serien" element={<Serien />} />
              <Route path="/suche" element={<Suche />} />
              <Route path="/filmseite/:id" element={<Filmseite />} />
              <Route path="/favoriten" element={<Favoriten />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
