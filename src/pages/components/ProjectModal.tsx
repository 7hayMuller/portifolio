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
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Trans } from "react-i18next";
import ClientOnly from "./ClientOnly";

type ImageProps = {
  src: string;
  width: number;
  height: number;
};

export type ProjectModalInfoProps = {
  key: string;
  images: ImageProps[];
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-center items-center py-8 md:py-4 px-4 md:px-8">
      <div
        className={`relative w-full max-w-[90vw] md:max-w-3xl mx-auto p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center bg-[#181629] transition-all duration-300 ease-out
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="fixed md:absolute top-6 right-6 md:top-4 md:right-4 bg-[#3DF58C] text-black rounded-full w-8 h-8 md:w-5 md:h-5 flex items-center justify-center font-bold text-lg md:text-base z-50 hover:bg-[#3DF58C]/20 transition"
        >
          ✕
        </button>

        {modalInfo?.video ? (
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
            <iframe
              src={modalInfo.video}
              className="w-full h-[200px] md:h-64 rounded-md"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full max-w-[400px] md:w-1/2 md:max-w-md h-[200px] md:h-[400px]"
          >
            {modalInfo?.images?.map((each, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center px-2 py-4 md:px-4 md:py-8"
              >
                <Image
                  src={each.src}
                  alt="Modal"
                  width={each.width}
                  height={each.height}
                  className="rounded-md object-contain w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex flex-col flex-1 text-left overflow-y-auto w-full md:w-[300px] max-h-[70vh] mt-[30px] md:ml-6 ">
          <p className="text-white text-sm md:text-base lg:text-md mb-2">
            <ClientOnly>
              <Trans i18nKey={modalInfo?.key} t={t} />
            </ClientOnly>
          </p>
          {modalInfo?.tecnologies && modalInfo?.tecnologies.length > 0 && (
            <div className="mt-4">
              <p className="font-bold text-white mb-2">
                <ClientOnly>{t("tecnologies_utilized")}</ClientOnly>
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                {modalInfo.tecnologies.map((tech: string) => {
                  const techMap: Record<string, JSX.Element> = {
                    next: <SiNextdotjs size={25} />,
                    sass: <FaSass size={25} />,
                    react: <FaReact size={25} />,
                    tailwind: <SiTailwindcss size={25} />,
                    figma: <IoLogoFigma size={25} />,
                    behance: <IoLogoBehance size={25} />,
                    "React Native": <TbBrandReactNative size={25} />,
                    expo: <SiExpo size={25} />,
                    typescript: <SiTypescript size={25} />,
                    css: <IoLogoCss3 size={25} />,
                  };

                  return (
                    <div
                      key={tech}
                      className="flex flex-col lg:items-center lg:text-center items-start justify-start text-white"
                    >
                      {techMap[tech] || null}
                    </div>
                  );
                })}
              </div>
            </div>
          )}{" "}
          <div className="mt-2">
            <p className="font-bold text-white mb-2">
              <ClientOnly>{t("see_more_in")}</ClientOnly>
            </p>
            <div className="flex justify-start gap-4">
              {modalInfo?.links[0].figma && (
                <a
                  href={modalInfo?.links[0].figma ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#3DF58C]"
                >
                  <IoLogoFigma size={30} />
                </a>
              )}
              {modalInfo?.links[0].behance && (
                <a
                  href={modalInfo?.links[0].behance ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#3DF58C]"
                >
                  <IoLogoBehance size={30} />
                </a>
              )}
              {modalInfo?.links[0].github && (
                <a
                  href={modalInfo?.links[0].github ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#3DF58C]"
                >
                  <FaGithub size={30} />
                </a>
              )}
              {modalInfo?.links[0].medium && (
                <a
                  href={modalInfo?.links[0].medium ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#3DF58C]"
                >
                  <SiMedium size={30} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
