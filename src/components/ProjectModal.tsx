import { useEffect, useState } from "react";
import { FaGithub, FaReact, FaSass } from "react-icons/fa";
import { IoLogoBehance, IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import {
  SiExpo,
  SiMedium,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Image from "next/image";
import { t } from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Trans } from "react-i18next";
import ClientOnly from "./ClientOnly";

export type ProjectModalInfoProps = {
  key: string;
  images: { src: string; width: number; height: number }[];
  video: string;
  mobile: boolean;
  tecnologies: string[];
  links: any;
  onClose: () => void;
};

type ProjectModalProps = {
  modalInfo: ProjectModalInfoProps;
  onClose: () => void;
};

const ProjectModal = ({ modalInfo, onClose }: ProjectModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setShow(true), 50);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center py-6 px-4 md:px-8">
      <div
        className={`relative w-full max-w-[95vw] sm:max-w-[600px] md:max-w-3xl mx-auto p-4 sm:p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center bg-[#181629] transition-all duration-300 ease-out
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* Fechar modal */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 bg-[#3DF58C] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-[#3DF58C]/30 transition z-[9999] touch-manipulation"
        >
          ✕
        </button>

        {/* Vídeo ou imagens */}
        {modalInfo?.video ? (
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
            <iframe
              src={modalInfo.video}
              className="w-full h-[180px] sm:h-[220px] md:h-64 rounded-md"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={12}
            slidesPerView={1}
            className="w-full sm:w-[85%] md:w-1/2 md:max-w-md"
          >
            {modalInfo?.images?.map((each, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center px-2 py-4 sm:px-3 sm:py-5"
              >
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-none aspect-[4/3]">
                  <Image
                    src={each.src}
                    alt="Project image"
                    fill
                    className="rounded-md object-contain"
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Texto e infos */}
        <div className="flex flex-col flex-1 text-left overflow-y-auto w-full md:w-[300px] max-h-[70vh] mt-6 md:ml-6">
          <p className="text-white text-sm sm:text-base md:text-md mb-2 leading-relaxed">
            <ClientOnly>
              <Trans i18nKey={modalInfo?.key} t={t} />
            </ClientOnly>
          </p>

          {/* Tecnologias */}
          {modalInfo?.tecnologies?.length > 0 && (
            <div className="mt-4">
              <p className="font-bold text-white mb-2">
                <ClientOnly>{t("tecnologies_utilized")}</ClientOnly>
              </p>
              <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
                {modalInfo.tecnologies.map((tech: string) => {
                  const techMap: Record<string, JSX.Element> = {
                    next: <SiNextdotjs size={22} />,
                    sass: <FaSass size={22} />,
                    react: <FaReact size={22} />,
                    tailwind: <SiTailwindcss size={22} />,
                    figma: <IoLogoFigma size={22} />,
                    behance: <IoLogoBehance size={22} />,
                    "React Native": <TbBrandReactNative size={22} />,
                    expo: <SiExpo size={22} />,
                    typescript: <SiTypescript size={22} />,
                    css: <IoLogoCss3 size={22} />,
                  };
                  return (
                    <div key={tech} className="flex items-center text-white">
                      {techMap[tech] || null}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="mt-4">
            <p className="font-bold text-white mb-2">
              <ClientOnly>{t("see_more_in")}</ClientOnly>
            </p>
            <div className="flex justify-start gap-4 flex-wrap">
              {modalInfo?.links?.map((link: any, index: number) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  {link.figma && (
                    <a
                      href={link.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#3DF58C]"
                    >
                      <IoLogoFigma size={26} />
                    </a>
                  )}
                  {link.behance && (
                    <a
                      href={link.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#3DF58C]"
                    >
                      <IoLogoBehance size={26} />
                    </a>
                  )}
                  {link.github && (
                    <a
                      href={link.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#3DF58C]"
                    >
                      <FaGithub size={26} />
                    </a>
                  )}
                  {link.medium && (
                    <a
                      href={link.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#3DF58C]"
                    >
                      <SiMedium size={26} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
