import * as React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="#"> Start Seite </a>
          </li>
          <li>
            <a href="#"> Filme </a>
          </li>
          <li>
            <a href="#"> Serien </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
