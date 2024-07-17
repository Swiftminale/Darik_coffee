import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { id: 1, src: "/pic/pic 9.png", alt: "Image 1" },
    { id: 2, src: "/pic/History.jpg", alt: "Image 2" },
    { id: 3, src: "/pic/pic 1.jpg", alt: "Image 3" },
    { id: 4, src: "/pic/pic 2.jpg", alt: "Image 4" },
    { id: 5, src: "/pic/pic 3.jpg", alt: "Image 5" },
    { id: 6, src: "/pic/pic 4.jpg", alt: "Image 6" },
    { id: 7, src: "/pic/pic 5.jpg", alt: "Image 7" },
    { id: 8, src: "/pic/pic 6.jpg", alt: "Image 8" },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Disable scroll when modal is open
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto"; // Enable scroll when modal is closed
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="cards__container">
        <div className="gallery">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div className="modal" onClick={handleCloseModal}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              className="modal-content"
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
            />
            <button
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              &#10094;
            </button>
            <button
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cards;
