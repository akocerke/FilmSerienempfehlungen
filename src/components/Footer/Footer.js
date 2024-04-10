import * as React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";

function Footer() {
  return (
    <footer>
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
