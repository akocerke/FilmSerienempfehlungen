import { Link } from "react-router-dom";
import React from "react";
import "./Footer.module.css"; // Stile hier importieren
import Content from "../Content/Content";

function Footer() {
  const fechaActual = new Date().getFullYear();

  return (
    <Content>
      <footer
        className="Footer"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/">StartSeite</Link>
            </li>
            <li>
              <Link to="/Filme">Filme</Link>
            </li>
            <li>
              <p>&copy; {fechaActual} Filmrausch</p>
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
    </Content>
  );
}

export default Footer;
