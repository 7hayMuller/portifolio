"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ----- PERFORMANCE: ResizeObserver otimizado -----
  useEffect(() => {
    if (!ref.current) return;

    const resize = new ResizeObserver(() => {
      setHeight(ref.current!.getBoundingClientRect().height);
    });

    resize.observe(ref.current);
    return () => resize.disconnect();
  }, []);

  // ----- Scroll progress -----
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // GPU-friendly transform
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // ----- High-performance active index -----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full bg-transparent dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-3xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[index] = el;
              return;
            }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 will-change-transform"
          >
            {/* Left side */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-[#e5e5dd] dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>

              <h3
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-white"
                    : "text-neutral-500 dark:text-neutral-500"
                }`}
              >
                {item.title}
              </h3>
            </div>

            {/* Right side */}
            <div
              className={`relative pl-20 md:pl-4 w-full transition-colors duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-neutral-400 dark:text-neutral-500"
              }`}
            >
              <h3
                className={`md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-white"
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
              >
                {item.title}
              </h3>

              {isMobile ? (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 0.35
                        : 0.55,
                    ease: "easeOut",
                  }}
                >
                  {item.content}
                </motion.div>
              ) : (
                <>{item.content}</>
              )}
            </div>
          </div>
        ))}

        {/* LINE */}
        <div
          style={{ height: height }}
          className="absolute left-8 -z-10 top-0 w-[2px] bg-neutral-400/40 dark:bg-neutral-300/30 overflow-hidden 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ scaleY, opacity }}
            className="origin-top absolute inset-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
