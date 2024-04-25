import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startseite from "./Pages/Startseite/Startseite";
import Filme from "./Pages/Filme/Filme";
import Serien from "./Pages/Serien/Serien";
import Suche from "./Pages/Suche/Suche";
import Filmseite from "./Pages/Filmseite/Filmseite";
import Serienseite from "./Pages/Serienseite/Serienseite";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Error from "./Pages/Error/Error";
import Impressum from "./Pages/Impressum/Impressum";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import Header from './components/Header/Header';


const App = () => {
  

  return (
    <>
      <BrowserRouter>
            <Header />
            <Navbar2 />
            <Routes>
              <Route path="/" element={<Startseite />} exact />
              <Route path="/filme" element={<Filme />} />
              <Route path="/serien" element={<Serien />} />
              <Route path="/suche" element={<Suche />} />
              <Route path="/filmseite/:id" element={<Filmseite />} />
              <Route path="/serienseite/:id" element={<Serienseite />} />
              <Route path="/favoriten/:userId" element={<Favoriten />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
