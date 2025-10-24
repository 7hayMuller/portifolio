"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { pacifico } from "@/pages/_app";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200, rotate: rotate - 25 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          style={{ borderRadius }}
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]",
            "after:rounded-[inherit]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ShapeHero({
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-white dark:bg-transparent min-h-[70vh] sm:min-h-[80vh] max-h-[500px] px-6 py-12 md:py-16">
      {/* Shapes */}
      <div className="absolute inset-0 overflow-hidden scale-[0.9] sm:scale-[1] md:scale-[1.1]">
        {/* Adapt sizes and positions per breakpoint */}
        <ElegantShape
          delay={0.3}
          width={180}
          height={300}
          rotate={-8}
          borderRadius={24}
          gradient="from-indigo-500/[0.25] dark:from-indigo-500/[0.35]"
          className="left-[-25%] sm:left-[-15%] top-[-5%]"
        />

        <ElegantShape
          delay={0.5}
          width={350}
          height={120}
          rotate={15}
          borderRadius={20}
          gradient="from-rose-500/[0.25] dark:from-rose-500/[0.35]"
          className="right-[-30%] sm:right-[-15%] bottom-[0%]"
        />

        <ElegantShape
          delay={0.4}
          width={200}
          height={200}
          rotate={24}
          borderRadius={32}
          gradient="from-[#A27DFB]/[0.25] dark:from-[#A27DFB]/[0.35]"
          className="left-[0%] sm:left-[5%] top-[45%]"
        />

        <ElegantShape
          delay={0.6}
          width={180}
          height={80}
          rotate={-20}
          borderRadius={12}
          gradient="from-amber-500/[0.25] dark:from-amber-500/[0.35]"
          className="right-[5%] sm:right-[15%] top-[10%]"
        />

        <ElegantShape
          delay={0.7}
          width={250}
          height={100}
          rotate={35}
          borderRadius={16}
          gradient="from-emerald-500/[0.25] dark:from-emerald-500/[0.35]"
          className="right-[-10%] sm:right-[0%] top-[55%]"
        />

        <ElegantShape
          delay={0.2}
          width={140}
          height={140}
          rotate={-25}
          borderRadius={28}
          gradient="from-[#3DF58C]/[0.25] dark:from-[#3DF58C]/[0.35]"
          className="left-[10%] sm:left-[15%] bottom-[8%]"
        />

        <ElegantShape
          delay={0.8}
          width={120}
          height={60}
          rotate={45}
          borderRadius={10}
          gradient="from-purple-500/[0.25] dark:from-purple-500/[0.35]"
          className="left-[35%] top-[15%]"
        />

        <ElegantShape
          delay={0.9}
          width={180}
          height={80}
          rotate={-12}
          borderRadius={18}
          gradient="from-[#F25D76] dark:from-[#F25D76]/[0.50]"
          className="left-[20%] top-[65%]"
        />
      </div>

      {/* Titles */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <h1 className="text-7xl sm:text-8xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 ">
              <span className="bg-clip-text text-[#fff]/70">{title1}</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-[#fff]/70 0",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
