"use client";
import { useScroll, useTransform, motion, Variants } from "framer-motion";
import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import ClientOnly from "../ClientOnly";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height + (isMobile ? 600 : 400)],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      let current = 0;

      itemRefs.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid && rect.bottom >= mid) {
            current = i;
          }
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full bg-transparent dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-[#e5e5dd] dark:text-[#e5e5dd] max-w-3xl">
          <ClientOnly>{t("timeline_title")}</ClientOnly>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#e5e5dd] dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
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

            <div
              className={`relative pl-20 pr-4 md:pl-4 w-full transition-colors duration-300 ${
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

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent from-[0%] via-neutral-400 dark:via-neutral-300 
                     to-transparent to-[99%] 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] 
                       bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
                       from-[0%] via-[40%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
