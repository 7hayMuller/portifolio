"use client";

import { useState, useEffect } from "react";
import "../../globals.css";
import "./arrow.css";
import { FaArrowRight } from "react-icons/fa6";

const Arrow = ({ onReveal }: { onReveal: (revealAmount: any) => void }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const difference = startX - currentX;
    const revealAmount = Math.min(Math.max(difference, 0), window.innerWidth);
    onReveal(revealAmount);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onReveal(0); // Always reset to 0 on mouse up
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
      className="fixed top-1/2 right-0 transform -translate-y-1/2 cursor-grab"
      onMouseDown={handleMouseDown}
    >
      <div className="group inline-block relative cursor-pointer">
        <div className="absolute hidden group-hover:block -translate-x-full pr-0.5 whitespace-nowrap top-1/2">
          <div className="flex items-center -translate-y-1/2">
            <div className="bg-white shadow-md text-black font-bold rounded-full py-3 px-5 cursor-default  text-wrap text-center flex justify-center text-[13px] text-bold w-[80px] h-[80px] border-black border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px]">
              Drag to Reveal
            </div>
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[12px] border-t-transparent border-b-transparent border-l-black -ml-[1px] mr-[10px]"></div>
          </div>
        </div>
        <div className="w-8 h-8 flex justify-center items-center text-white animate-move">
          <FaArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Arrow;
