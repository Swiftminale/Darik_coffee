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
      title: "Second description",
      description: "Second description content.",
    },
    {
      title: "Third description",
      description: "Third description content.",
    },
    {
      title: "Fourth description",
      description: "Fourth description content.",
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
