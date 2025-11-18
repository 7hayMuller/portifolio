"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 298;

function frameSrc(index: number) {
  return `/assets/cube-and-balls/${String(index).padStart(3, "0")}.png`;
}

export default function CubeSequence() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [desktop, setDesktop] = useState(false);

  const render = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!desktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;

      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      contextRef.current = ctx;

      render(0);
      ScrollTrigger.refresh();
    };

    const loadFrames = () => {
      const arr: HTMLImageElement[] = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = frameSrc(i);
        arr.push(img);
      }

      imagesRef.current = arr;

      arr[0].onload = () => {
        resizeCanvas();
        render(0);
        setupScroll();
      };
    };

    let st: ScrollTrigger | null = null;

    const setupScroll = () => {
      st?.kill();

      st = ScrollTrigger.create({
        trigger: "#skills",
        start: "top bottom",

        scrub: 0.25,

        onUpdate: (self) => {
          const index = Math.floor(self.progress * (frameCount - 1));
          requestAnimationFrame(() => render(index));
        },
      });
    };

    loadFrames();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      st?.kill();
    };
  }, [desktop, render]);

  if (!desktop) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        // height: 400,
      }}
    />
  );
}
