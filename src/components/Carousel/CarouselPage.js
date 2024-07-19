import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img0 from "./Carousel_img/img1.jpg";
import img1 from "./Carousel_img/Limu.png";
import img2 from "./Carousel_img/Bale.png";
import img3 from "./Carousel_img/Blended.png";
import img4 from "./Carousel_img/Sidama.png";
import img5 from "./Carousel_img/Yirgachefe.png";
import "./CarouselPage.css";

function CarouselPage() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-img">
        <img src={img0} alt="First slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Beyond Your Imagination</h3>
          <p className="text-dark">Darik Coffe , Since 2011</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img1} alt="Second slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Premium Poultry Nutrition</h3>
          <p className="text-dark">
            Ensuring your flock's health with top-quality chicken feed.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img2} alt="Third slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Trusted Supply, Quality Care</h3>
          <p className="text-dark">
            Reliable imports for exceptional poultry care.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img3} alt="Fourth slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Elevate Your Poultry Farming</h3>
          <p className="text-dark">
            Providing essential materials for thriving chickens.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img4} alt="Fourth slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Elevate Your Poultry Farming</h3>
          <p className="text-dark">
            Providing essential materials for thriving chickens.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img5} alt="Fourth slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Elevate Your Poultry Farming</h3>
          <p className="text-dark">
            Providing essential materials for thriving chickens.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
