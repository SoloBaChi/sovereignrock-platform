import React, { useState } from "react";

function Gallery({ img1, img2, img3, img4, alt }) {
  const [showMorePhotos, setShowMorePhotos] = useState(false);
  const handleShowPhotos = () => {
    setShowMorePhotos((prev) => !prev);
  };
  return (
    <section className="gallery">
      <h3>gallery</h3>
      <div className="photo-grid">
        <div className="grid-container">
          <div className="grid-item">
            <img src={img1} alt={alt} />
          </div>
          <div className="grid-item">
            <img src={img2} alt={alt} />
          </div>
          <div className="grid-item">
            <img src={img3} alt={alt} />
          </div>
          <div className="grid-item see-more" onClick={handleShowPhotos}>
            <img src={img4} alt={alt} />
            <p className="text-title">
              {showMorePhotos ? "see less" : "see more"}
            </p>
          </div>
          {/* see more photos */}
          <div
            className={showMorePhotos ? "grid-item show" : "grid-item hidden"}
          >
            <img src={img3} alt={alt} />
          </div>
          <div
            className={showMorePhotos ? "grid-item show" : "grid-item hidden"}
          >
            <img src={img3} alt={alt} />
          </div>
          <div
            className={showMorePhotos ? "grid-item show" : "grid-item hidden"}
          >
            <img src={img3} alt={alt} />
          </div>
          <div
            className={showMorePhotos ? "grid-item show" : "grid-item hidden"}
          >
            <img src={img3} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
