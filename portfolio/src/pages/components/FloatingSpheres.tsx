// components/FloatingSpheres.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generateRandomPosition = () => {
  const x = Math.random() * 40;
  const y = Math.random() * 50;
  return { x, y };
};

interface SphereProps {
  size: string;
  color: string | undefined;
}

const Sphere: React.FC<SphereProps> = ({ size, color }) => {
  const [position, setPosition] = useState(generateRandomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(generateRandomPosition());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`absolute rounded-full ${size}`}
      style={{
        background:
          color ||
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7), rgba(204, 204, 204, 0.5), rgba(136, 136, 136, 0.3))",
        boxShadow: color
          ? "0 10px 20px rgba(255, 255, 255, 0.7), 0 6px 10px rgba(241, 196, 15, 0.5)"
          : "0 4px 8px rgba(0, 0, 0, 0.3)",
        width: "150px",
        height: "150px",
        backdropFilter: "blur(5px)",
      }}
      animate={{
        x: `${position.x}vw`,
        y: `${position.y}vh`,
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
  const spheres = new Array(10).fill(0);

  return (
    <div className="relative w-full h-full">
      {spheres.map((_, index) => (
        <Sphere
          key={index}
          size="w-12 h-12"
          color={
            index === 0
              ? "radial-gradient(circle at 30% 30%, rgba(241, 196, 15, 0.9), rgba(241, 196, 15, 0.7), rgba(205, 180, 10, 0.5), rgba(183, 149, 11, 0.3))"
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default FloatingSpheres;
