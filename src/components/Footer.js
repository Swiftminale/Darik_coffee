import React from "react";
import "./Footer.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo_or from "../pic/image_png.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div>
            <img src={Logo_or} alt="logo" className="footer-logo-img" />
          </div>
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DARIK
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </div>
          <small className="website-rights">Darik © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
