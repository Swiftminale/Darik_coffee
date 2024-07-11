import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
// import Cards from "../Cards";
import Footer from "../Footer";
import Advert from "../Advert";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <Advert />
      <Footer />
    </>
  );
}
export default Home;
