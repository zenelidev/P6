import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const totalSlides = images.length;

  useEffect(() => {
    // Calculate the translation value based on the currentIndex
    const translateValue = -currentIndex * 101; // Assuming each slide takes up 100% width

    // Apply the transform property to move the slides
    document.querySelector('.carousel-content').style.transform = `translateX(${translateValue}%)`;
  }, [currentIndex]);

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-arrow-previous" onClick={previousSlide}>
          &lt;
        </button>
      )}

      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <button className="carousel-arrow-next" onClick={nextSlide}>
          &gt;
        </button>
      )}

      <div className="carousel-pagination">
        <span>{currentIndex + 1}</span> / {totalSlides}
      </div>
    </div>
  );
};

export default Carousel;
