"use client";

import { useState, useEffect } from "react";
import "../../globals.css";
import { FaArrowRight } from "react-icons/fa6";

const Arrow = ({ onReveal }: { onReveal: (revealAmount: any) => void }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const difference = startX - currentX;
    const revealAmount = Math.min(Math.max(difference, 0), window.innerWidth);
    onReveal(revealAmount);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onReveal((prevAmount: number) =>
      prevAmount > window.innerWidth / 3 ? window.innerWidth : prevAmount
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div
      className="fixed top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
      onMouseDown={handleMouseDown}
    >
      <div className="w-8 h-8 flex justify-center items-center  text-white animate-move">
        <FaArrowRight size={30} />
      </div>
    </div>
  );
};

export default Arrow;
