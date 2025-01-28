"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactLogo from "../../../public/assets/react.png";
import Next from "../../../public/assets/next.png";
import Tailwind from "../../../public/assets/tailwind.png";
import Typescript from "../../../public/assets/typescript.png";
import Javascript from "../../../public/assets/javascript.png";
import Sass from "../../../public/assets/sass-logo.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFastTransition, setIsFastTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const images = [ReactLogo, Next, Tailwind, Typescript, Javascript, Sass];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center ">
      {images.map((src, index) => {
        const position = (index - currentIndex + images.length) % images.length;
        const angle = position * (360 / images.length);
        const zIndex = images.length - position;
        const opacity = 1 - position / (images.length - 1);
        const translateYValue = isMobile ? -120 : -210;
        const size = isMobile ? 50 : 120;
        const transformStyle = `rotate(${angle}deg) translateY(${translateYValue}px) rotate(-${angle}deg)`;

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
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <div className="glass-card flex items-center justify-center w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="intrinsic"
                width={size}
                height={size}
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
