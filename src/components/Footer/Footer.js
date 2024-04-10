import { Link } from "react-router-dom";
import React from 'react';
import './Footer.module.css'; // Stile hier importieren

function Footer() {
  return (
    <footer className="Footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">StartSeite</Link>
          </li>
          <li>
            <Link to="/Filme">Filme</Link>
          </li>
          <li>
            <Link to="/Serien">Serien</Link>
          </li>
          <li>
            <Link to="/Impressum">Impressum</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
