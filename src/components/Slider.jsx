/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const images = ["slider.jpg", "slider2.png", "slider3.jpg", "slider4.jpg"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="bg-gray-100">
      <div className="relative w-[900px] mx-auto pt-24 overflow-hidden group">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[1000px] h-72 object-cover flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 mt-10 transform -translate-y-1/2 text-white bg-gray-400 bg-opacity-50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 mt-10 transform -translate-y-1/2 text-white bg-gray-400 bg-opacity-50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          &#10095;
        </button>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
