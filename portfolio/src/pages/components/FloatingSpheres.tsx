"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const generateRandomPosition = (
  containerWidth: number,
  containerHeight: number,
  size: number
) => {
  const maxX = containerWidth - size;
  const maxY = containerHeight - size;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  return { x, y };
};

interface SphereProps {
  size: number;
  color: string | undefined;
  containerWidth: number;
  containerHeight: number;
}

const Sphere: React.FC<SphereProps> = ({
  size,
  color,
  containerWidth,
  containerHeight,
}) => {
  const [position, setPosition] = useState(
    generateRandomPosition(containerWidth, containerHeight, size)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(
        generateRandomPosition(containerWidth, containerHeight, size)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [containerWidth, containerHeight, size]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background:
          color ||
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7), rgba(204, 204, 204, 0.5), rgba(136, 136, 136, 0.3))",
        boxShadow: color
          ? "0 10px 20px rgba(255, 255, 255, 0.7), 0 6px 10px rgba(241, 196, 15, 0.5)"
          : "0 4px 8px rgba(0, 0, 0, 0.3)",
        width: `${size}px`,
        height: `${size}px`,
        backdropFilter: "blur(5px)",
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 1,
        damping: 20,
        stiffness: 80,
      }}
    />
  );
};

const FloatingSpheres: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  const spheres = new Array(10).fill(0);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {spheres.map((_, index) => (
        <Sphere
          key={index}
          size={index === 0 ? 50 : 40}
          color={
            index === 0
              ? "radial-gradient(circle at 30% 30%, rgba(241, 196, 15, 0.9), rgba(241, 196, 15, 0.7), rgba(205, 180, 10, 0.5), rgba(183, 149, 11, 0.3))"
              : undefined
          }
          containerWidth={containerSize.width}
          containerHeight={containerSize.height}
        />
      ))}
    </div>
  );
};

export default FloatingSpheres;
