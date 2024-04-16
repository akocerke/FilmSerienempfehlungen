import React from "react";
import "../../style/App.css";
import "../../style/GlobalVars.css";
import Home from "../Home/Home";
import Film from "../../Pages/Home/FilmeCarrusel";
import CarruselTV from "../Serien/SerienCarrusel";
import TopRated from "../Filme/TopRated";

function Startseite() {
  return (
    <div>
      <Home />
      <TopRated />
      <Film />
      <CarruselTV />
    </div>
  );
}

export default Startseite;
