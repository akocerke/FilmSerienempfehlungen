import './style/App.css';
import './style/GlobalVars.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startseite from "./Pages/Startseite/Startseite";
import Filme from "./Pages/Filme/Filme";
import Serien from "./Pages/Serien/Serien";
import Suche from "./Pages/Suche/Suche";
import Filmseite from "./Pages/Filmseite/Filmseite";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Error from "./Pages/Error/Error";
import Impressum from "./Pages/Impressum/Impressum";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startseite />} exact />
          <Route path="/filme" element={<Filme />} />
          <Route path="/serien" element={<Serien />} />
          <Route path="/suche" element={<Suche />} />
          <Route path="*" element={<Error />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/favoriten" element={<Favoriten />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
 

export default App;
