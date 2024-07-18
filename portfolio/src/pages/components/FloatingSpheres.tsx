// components/FloatingSpheres.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generateRandomPosition = () => {
  const x = Math.random() * 35;
  const y = Math.random() * 50;
  return { x, y };
};

interface SphereProps {
  size: string;
}

const Sphere: React.FC<SphereProps> = ({ size }) => {
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
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(204, 204, 204, 0.4), rgba(136, 136, 136, 0.2))",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        width: "100px",
        height: "100px",
        backdropFilter: "blur(5px)",
      }}
      animate={{
        x: `${position.x}vw`,
        y: `${position.y}vh`,
      }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.4,
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
      }}
    />
  );
};

const FloatingSpheres: React.FC = () => {
  const spheres = new Array(10).fill(0);

  return (
    <div className="relative w-full h-full">
      {spheres.map((_, index) => (
        <Sphere key={index} size="w-12 h-12" />
      ))}
    </div>
  );
};

export default FloatingSpheres;
