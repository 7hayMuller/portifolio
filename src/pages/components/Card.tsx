import { useRef } from "react";
import { t } from "i18next";
import ClientOnly from "./ClientOnly";
import Image from "next/image";

type CardProps = {
  type: string;
  title: string;
  intro: string;
  stack: string;
  highlight?: boolean;
  onClick?: () => void;
  buttonTitle?: string;
  previewVideo?: any;
};

const Card: React.FC<CardProps> = ({
  buttonTitle = t("See more"),
  type,
  title,
  intro,
  stack,
  highlight,
  onClick,
  previewVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative bg-[#101524]/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg w-full max-w-sm min-h-[300px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {previewVideo && (
        <div
          className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={onClick}
        >
          <video
            ref={videoRef}
            src={previewVideo}
            className="w-full h-full object-cover pointer-events-none"
            muted
            loop
          />
        </div>
      )}

      <div
        className="p-5 flex flex-col gap-4 z-10 relative"
        style={{ marginTop: highlight ? 20 : 0 }}
      >
        {highlight && (
          <div className="w-full h-10  mb-[100px]">
            <Image
              src="/assets/mobile_waves2.png"
              alt="Decoração orgânica"
              fill
              className="object-cover mt-[-200px]"
              priority
            />
          </div>
        )}

        <span className="bg-[#004b5c] text-cyan-100 text-xs font-semibold px-2 py-1 rounded-full w-fit">
          <ClientOnly>{type}</ClientOnly>
        </span>

        <h3 className="text-white text-lg font-semibold">
          <ClientOnly>{title}</ClientOnly>
        </h3>

        <p className="text-sm text-gray-400">
          <ClientOnly>{stack}</ClientOnly>
        </p>

        <p className="text-sm text-gray-300 leading-snug">
          <ClientOnly>{intro}</ClientOnly>
        </p>

        <a
          href="#"
          className="bg-gradient-to-r from-[#A27DFB] to-[#6E8CFA] text-white text-sm font-medium px-4 py-2 rounded-md w-fit mt-2 hover:opacity-90 transition"
          onClick={onClick}
        >
          <ClientOnly>{buttonTitle}</ClientOnly>
        </a>
      </div>
    </div>
  );
};

export default Card;
