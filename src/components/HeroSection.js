import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-03.mp4" autoPlay loop muted />
      <h1>Darik Coffee | ዳሪክ ቡና</h1>

      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Request Sample
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          <Link to="Gallery" className="Nav-Hero">
            Gallery
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
