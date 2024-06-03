"use client";

import { useEffect } from "react";
import "./cube.css";
import "./globals.css";

const RubiksCube = () => {
  const details = Array.from({ length: 27 }, (_, i) => (
    <div key={i} className="detail">
      <div className="side front"></div>
      <div className="side back"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
      <div className="side left"></div>
      <div className="side right"></div>
    </div>
  ));

  useEffect(() => {
    const timer = setTimeout(() => {
      document?.querySelector(".container")?.classList.add("move-cube-up");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container left-[225px]">
      <div className="rubiks-cube rubiks-cube-1">{details}</div>
    </div>
  );
};

export default RubiksCube;
