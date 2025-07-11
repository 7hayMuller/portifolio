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

type ImageProps = {
  src: string;
  width: number;
  height: number;
};

export type ProjectModalInfoProps = {
  description: string;
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center p-4">
      <div
        className={`relative w-full max-w-full md:max-w-3xl mx-auto p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center bg-[#181629] transition-all duration-300 ease-out
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-[#3DF58C] text-black rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-[#3DF58C]/20 transition"
        >
          ✕
        </button>

        {modalInfo.video ? (
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
            <iframe
              src={modalInfo.video}
              className="w-full h-64 rounded-md"
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
            className="w-1/2 max-w-md h-[400px] "
          >
            {modalInfo?.images?.map((each, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center px-4 py-8"
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

        <div className="flex flex-col flex-1 text-left overflow-hidden w-[300px] max-h-[80vh] mt-4 md:mt-0 md:ml-6 ">
          <p className="text-white text-sm md:text-base mb-4 mt-10">
            {modalInfo.description}
          </p>
          {modalInfo?.tecnologies && modalInfo?.tecnologies.length > 0 && (
            <div className="mt-4">
              <p className="font-bold text-white mb-2">
                {t("tecnologies_utilized")}
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
            <p className="font-bold text-white mb-2">Links:</p>
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
