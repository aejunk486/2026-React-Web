import { useState } from "react";
import "./ImageSlider.css";

const images = [
  "/images/cake03.jpg",
  "/images/cake04.jpg",
  "/images/cake05.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToImage(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="sliderContainer">
      <div className="sliderWrapper">
        <button className="arrowButton arrowLeft" onClick={goToPrevious}>
          ‹
        </button>

        <img
          src={images[currentIndex]}
          alt={`ภาพที่ ${currentIndex + 1}`}
          className="sliderImage"
        />

        <button className="arrowButton arrowRight" onClick={goToNext}>
          ›
        </button>
      </div>

      <div className="dotContainer">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "dotActive" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}