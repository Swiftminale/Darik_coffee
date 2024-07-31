import React, { useEffect, useRef } from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Adjust the speed here
    }
  }, []);

  return (
    <div className="hero-container">
      <video ref={videoRef} src="/videos/video-03.mp4" autoPlay loop muted />
      <h1>
        Darik <br /> Coffee <br />
      </h1>
      <h4 className="darik">| ዳሪክ ቡና |</h4>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns btn--outline btn--large"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Request Sample
        </Button>
        <Link to="Gallery" className="Nav-Hero">
          <Button
            className="btns btn--primary btn--large"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
