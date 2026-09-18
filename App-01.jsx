import { useState } from "react";
import "./App-01.css";

const images = [
  "/images/cake03.jpg",
  "/images/cake04.jpg",
  "/images/cake05.jpg",
  "/images/cake06.jpg",
  "/images/cake07.jpg",
];

export default function GridGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="galleryContainer">
      <h2 className="galleryTitle">แกลเลอรีภาพ</h2>

      <div className="galleryGrid">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`ภาพที่ ${index + 1}`}
            className="galleryImage"
            onClick={() => setSelectedImage(imageUrl)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="previewOverlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="ภาพที่เลือก" className="previewImage" />
        </div>
      )}
    </div>
  );
}
