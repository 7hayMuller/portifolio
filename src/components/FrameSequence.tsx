"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FrameSequenceProps {
  frameSources: string[];
  triggerSelector?: string;
  width?: number;
  height?: number;
  scrub?: number;
  start?: string;
}

export default function FrameSequence({
  frameSources,
  triggerSelector = "#skills",
  width = 1422,
  height = 1080,
  scrub = 0.5,
  start = "top bottom",
}: FrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [ready, setReady] = useState(false);

  const render = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = contextRef.current;
      const img = imagesRef.current[index];

      if (!canvas || !ctx || !img || !img.complete) return;

      canvas.width = width;
      canvas.height = height;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
    },
    [width, height],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    contextRef.current = ctx;

    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    frameSources.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loaded++;
        if (loaded === frameSources.length) {
          imagesRef.current = imgs;
          setReady(true);
        }
      };

      imgs.push(img);
    });
  }, [frameSources]);

  useEffect(() => {
    if (!ready) return;

    render(0);

    const st = ScrollTrigger.create({
      trigger: triggerSelector,
      start,
      scrub,
      onUpdate: (self) => {
        const speed = 2.5; // AUMENTE AQUI PARA FICAR MAIS RÁPIDO
        const maxIndex = frameSources.length - 1;

        const index = Math.min(
          Math.floor(self.progress * maxIndex * speed),
          maxIndex,
        );

        render(index);
      },
    });

    return () => st.kill();
  }, [ready, frameSources, triggerSelector, scrub, start, render]);

  return (
    <>
      {!ready && (
        <p className="text-gray-400 text-center text-sm">
          Loading animation...
        </p>
      )}

      <canvas
        ref={canvasRef}
        style={{
          display: ready ? "block" : "none",
          margin: "0 auto",
        }}
      />
    </>
  );
}
