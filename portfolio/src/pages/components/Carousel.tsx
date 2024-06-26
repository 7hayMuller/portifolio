// components/Carousel.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Css from "../../../public/assets/css3.png";
import Html from "../../../public/assets/html5.png";
import ReactLogo from "../../../public/assets/react.png";
import Next from "../../../public/assets/next.png";
import Tailwind from "../../../public/assets/tailwind.png";
import Jest from "../../../public/assets/jest.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFastTransition, setIsFastTransition] = useState(false);
  const images = [Css, Html, ReactLogo, Next, Tailwind, Jest];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setIsFastTransition(true);
        setTimeout(() => {
          setIsFastTransition(false);
          setCurrentIndex(0);
        }, 500);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {images.map((src, index) => {
        const position = (index - currentIndex + images.length) % images.length;
        const angle = position * (360 / images.length);
        const zIndex = images.length - position;
        const opacity = 1 - position / (images.length - 1);
        const transformStyle = `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`;

        return (
          <div
            key={index}
            className={`absolute transition-transform ${
              isFastTransition ? "duration-500" : "duration-1000"
            } ease-out`}
            style={{
              transform: transformStyle,
              zIndex: zIndex,
              opacity: opacity,
            }}
          >
            <div className="glass-card">
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={150}
                height={150}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
