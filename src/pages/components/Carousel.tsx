"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactLogo from "../../../public/assets/react.png";
import Next from "../../../public/assets/next.png";
import Tailwind from "../../../public/assets/tailwind.png";
import Typescript from "../../../public/assets/typescript.png";
import Javascript from "../../../public/assets/javascript.png";
import Sass from "../../../public/assets/sass-logo.png";
import Figma from "../../../public/assets/figma.png";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isMobile, setIsMobile] = useState(false);
 
  

  const images = [
    { key: "react", src: ReactLogo },
    { key: "next", src: Next },
    { key: "tailwind", src: Tailwind },
    { key: "typescript", src: Typescript },
    { key: "javascript", src: Javascript },
    { key: "sass", src: Sass },
    { key: "figma", src: Figma },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <div
      className="w-full flex items-center justify-center h-[400px] lg:h-[500px]"
     
    >
      {images.map((each, index) => {
        const position = (index - currentIndex + images.length) % images.length;
        const angle = position * (360 / images.length);
        const zIndex = images.length - position;
        const opacity = 0.3;

        const translateYValue = isMobile ? -120 : -180;
        const size = isMobile ? 80 : 120;
        const scale = 1;
        const brightness = 1;

        const transformStyle = `rotate(${angle}deg) translateY(${translateYValue}px) rotate(-${angle}deg) scale(${scale})`;

        return (
          <div
            key={index}
            className={`absolute transition-transform duration-300 ease-out`}
            style={{
              transform: transformStyle,
              zIndex: zIndex,
              opacity: opacity,
              width: `${size}px`,
              height: `${size}px`,
              filter: `brightness(${brightness})`,
            }}
          >
            <div
              className="glass-card flex items-center justify-center w-full h-full"
             
            >
              <Image
                src={each.src}
                alt={`Slide ${index}`}
                width={isMobile ? size - 30 : size - 50}
                height={isMobile ? size - 30 : size - 50}
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
