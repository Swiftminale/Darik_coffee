import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Advert.css";
import advertImage from "../pic/image.jpg"; // Adjust the import based on the correct path

function Advert() {
  const descriptions = [
    {
      title: "Exquisite Quality in Every Sip",
      description:
        "Discover the highest quality coffee, sourced from the finest beans and crafted to perfection. Each cup promises an unparalleled taste experience that true coffee connoisseurs will love.",
    },
    {
      title: "Perfectly Roasted for Rich Flavor",
      description:
        "Our coffee is roasted to perfection, bringing out the rich, deep flavors in every bean. Enjoy a robust, aromatic brew that will invigorate your senses and elevate your coffee experience.",
    },
    {
      title: "Beautifully Packaged, Elegantly Presented",
      description:
        "Our coffee is not only delicious but also beautifully packaged. Each package is a work of art, designed to preserve the freshness and flavor while adding a touch of elegance to your coffee routine.",
    },
    {
      title: "Sustainably Sourced, Ethically Produced",
      description:
        "We are committed to sustainability and ethical practices. Our coffee is sourced from environmentally conscious farms, ensuring that every cup you enjoy supports both quality and sustainability.",
    },
  ];

  return (
    <div className="container">
      <div className="advert-container">
        <div className="image-container">
          <img src={advertImage} alt="Advert" className="advert-image" />
        </div>
        <div className="descriptions-container">
          {descriptions.map((item, index) => (
            <div key={index} className="description-item">
              <i className="fas fa-coffee description-icon"></i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advert;
