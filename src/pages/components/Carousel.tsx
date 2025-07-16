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

type CarouselProps = {
  setActiveKey: (value: string) => void;
};

const Carousel: React.FC<CarouselProps> = ({ setActiveKey }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFastTransition, setIsFastTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (isPaused) return;

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
  }, [currentIndex, images.length, isPaused]);

  return (
    <div
      className="w-full flex items-center justify-center h-[400px] lg:h-[500px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((each, index) => {
        const position = (index - currentIndex + images.length) % images.length;
        const angle = position * (360 / images.length);
        const zIndex = images.length - position;
        const opacity =
          hoveredIndex === null
            ? 1 - position / (images.length - 1)
            : hoveredIndex === index
            ? 1
            : 0.3;

        const translateYValue = isMobile ? -120 : -180;
        const size = isMobile ? 80 : 120;
        const scale = hoveredIndex === index ? 1.1 : 1;
        const brightness = hoveredIndex === index ? 1.5 : 1;

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
              className="glass-card flex items-center justify-center w-full h-full cursor-pointer"
              onMouseEnter={() => {
                setActiveKey(each.key);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
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
