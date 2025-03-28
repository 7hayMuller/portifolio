"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./components/NavBar";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FaGithub, FaReact, FaSass } from "react-icons/fa";
import { SiExpo, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoBehance, IoLogoFigma } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { TiArrowRightOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Loading from "./components/Loading";
import Head from "next/head";

export type ModalInfoProps = {
  description: string;
  image: string;
  video: string;
  mobile: boolean;
  tecnologies: string[];
  links: any;
  onClose: () => void;
};

type ModalProps = {
  modalInfo: ModalInfoProps;
  onClose: () => void;
};

const Modal = ({ modalInfo, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 h-full flex justify-center items-center p-4 overflow-y-auto">
      <div className="relative p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-black rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-gray-300 transition"
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
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 flex justify-center">
            <Image
              src={modalInfo.image ?? ""}
              alt="Modal"
              width={300}
              height={300}
              className="rounded-md object-contain max-h-[350px]"
            />
          </div>
        )}

        <div className="flex flex-col flex-1 text-center md:text-left overflow-y-auto max-h-[80vh]">
          <p className="text-white text-sm md:text-base mb-4">
            {modalInfo.description}
          </p>

          {modalInfo?.tecnologies && modalInfo?.tecnologies.length && (
            <div className="mt-4">
              <p className="font-bold text-white mb-2">
                {t("tecnologies_utilized")}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {modalInfo.tecnologies ? (
                  modalInfo.tecnologies?.map((tech: string) => {
                    const techMap: Record<string, JSX.Element> = {
                      next: <SiNextdotjs size={25} />,
                      sass: <FaSass size={25} />,
                      react: <FaReact size={25} />,
                      tailwind: <SiTailwindcss size={25} />,
                      figma: <IoLogoFigma size={25} />,
                      behance: <IoLogoBehance size={25} />,
                      "React Native": <TbBrandReactNative size={25} />,
                      Expo: <SiExpo size={25} />,
                    };

                    return (
                      <div
                        key={tech}
                        className="flex flex-col items-center text-center text-white"
                      >
                        {techMap[tech] || null}
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}

          <div className="mt-4">
            <p className="font-bold text-white mb-2">Links:</p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              {modalInfo?.links[0].figma && (
                <a
                  href={modalInfo?.links[0].figma ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#be1d90]"
                >
                  <IoLogoFigma size={30} />
                </a>
              )}
              {modalInfo?.links[0].behance && (
                <a
                  href={modalInfo?.links[0].behance ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#be1d90]"
                >
                  <IoLogoBehance size={30} />
                </a>
              )}
              {modalInfo?.links[0].github && (
                <a
                  href={modalInfo?.links[0].github ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#be1d90]"
                >
                  <FaGithub size={30} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);

  return (
    <>
      <Head>
        <title>{t("my_projects")}</title>
      </Head>
      <Loading />

      <Navbar />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} modalInfo={modalInfo} />
      )}
      <div className="flex flex-col mt-[50px] md:mt-[100px] items-center justify-center">
        <div className="flex flex-col w-[90%] sm:w-[600px] justify-center items-center">
          <div className="flex flex-col justify-between text-[#e2e8c0] text-3xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
            <h2 className="flex justify-center sm:justify-start">
              Front<div className="text-[#be1d90]">en</div>d{" "}
              <div className="ml-2 bg-clip-text text-transparent bg-e-gradient">
                &
              </div>
            </h2>
            <div className="flex justify-center sm:justify-start sm:ml-[50px]">
              <h2 className="mr-2">UX/UI</h2>
              <h2 className="flex">
                proje<div className="text-[#6AD5CB]">{t("ct")}</div>s
              </h2>
            </div>
          </div>
          <p className="text-[#e2e8c0] text-center mt-6 sm:mt-10">
            {t("project_introduction")}
          </p>
        </div>
        <div className="relative w-full mt-[50px]">
          <div className="absolute top-0 right-2 transform -translate-x-1/2 z-10 hidden sm:flex sm:flex-col items-right">
            <p className="text-white text-sm animate-bounce">
              {t("drag_to_see_more")}
              <TiArrowRightOutline size={20} />
            </p>
          </div>
          <Image
            className="-mt-[100px] sm:-mt-[150px] md:-mt-[300px] -z-20 opacity-50"
            src="/assets/frontupperwave.png"
            width={2000}
            height={500}
            alt="Upper Wave"
          />
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1.33,
              },
            }}
            className="mySwiper -mt-[10px] sm:-mt-[70px]"
            loop
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide className="w-full flex flex-col justify-start md:justify-between items-center px-4 py-8">
              <p className="text-2xl sm:text-3xl text-[#e2e8c0] font-[700] text-center">
                waves
              </p>
              <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
                {[
                  { src: "/assets/waves_library.png", width: 243, height: 150 },
                  {
                    src: "/assets/waves_mobile_portrait.png",
                    width: 243,
                    height: 150,
                  },
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt="waves"
                    width={image.width}
                    height={image.height}
                    className="w-auto  h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                    onClick={() => {
                      setModalInfo({
                        image: image.src,
                        mobile: image.src.includes("mobile") ? true : false,
                        description: t("waves"),
                        tecnologies: ["next", "sass"],
                        links: [
                          {
                            github: "https://github.com/7hayMuller/waves-music",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full justify-start md:justify-between items-center px-4 py-8">
              <p className="text-xl sm:text-2xl text-[#e2e8c0] font-[700] text-center">
                {t("landing_page_title")}
              </p>
              <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
                {[
                  { src: "/assets/sumup_mobile.png", width: 243, height: 150 },
                  { src: "/assets/sumup_desktop.png", width: 243, height: 150 },
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt="sumup"
                    width={image.width}
                    height={image.height}
                    className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                    onClick={() => {
                      setModalInfo({
                        image: image.src,
                        mobile: image.src.includes("mobile") ? true : false,
                        description: t("landing_page_description"),
                        links: [
                          {
                            figma:
                              "https://www.figma.com/design/5pQefnNNihalABA1mlfKVx/Landing-page---SumUP%2FPIX?node-id=0-1&t=LW78jJBOIhacNIwv-1",
                            behance:
                              "https://www.behance.net/gallery/212520691/Landing-page-e-E-mail-marketing-para-SumUPPIX",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full  justify-start md:justify-between items-center px-4 py-8">
              <p className="text-xl sm:text-2xl text-[#e2e8c0] font-[700] text-center">
                {t("this_portfolio")}
              </p>
              <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
                {[
                  {
                    src: "/assets/mockup-desk-portifolio.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/mockup-mobile-portifolio.png",
                    width: 243,
                    height: 150,
                  },
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt="portifolio"
                    width={image.width}
                    height={image.height}
                    className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                    onClick={() => {
                      setModalInfo({
                        image: image.src,
                        description: t("this_portfolio_description"),
                        mobile: image.src.includes("mobile") ? true : false,
                        tecnologies: ["next", "tailwind"],
                        links: [
                          {
                            github:
                              "https://github.com/7hayMuller/portifolio/tree/main/portfolio",
                            figma:
                              "https://www.figma.com/design/Z7KASeUUwpKMUhw2W1jLIO/Portif%C3%B3lio?node-id=0-1&t=3GVfwI3XxcUp6aiQ-1",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full  justify-start md:justify-between items-center px-4 py-8">
              <p className="text-xl sm:text-2xl text-[#e2e8c0] font-[700] text-center">
                Nearby
              </p>
              <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
                {[
                  {
                    src: "/assets/nearby-splash-mobile.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/nearby-start-mobile.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/nearby-home-mobile.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/nearby-homelist-mobile.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/nearby-details-mobile.png",
                    width: 243,
                    height: 150,
                  },
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt="nearby"
                    width={image.width}
                    height={image.height}
                    className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                    onClick={() => {
                      setModalInfo({
                        image: image.src,
                        description: t("nearby"),
                        mobile: image.src.includes("mobile") ? true : false,
                        tecnologies: ["React Native", "Expo"],
                        links: [
                          {
                            github: "https://github.com/7hayMuller/nlw-nearby",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full justify-start md:justify-between items-center px-4 py-8">
              <p className="text-xl sm:text-2xl text-[#e2e8c0] font-[700] text-center">
                {t("itau_title")}
              </p>
              <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
                {[
                  {
                    src: "/assets/desktop_itau-front.png",
                    width: 243,
                    height: 150,
                  },
                  {
                    src: "/assets/smartphone_itau-portrait.png",
                    width: 243,
                    height: 0,
                  },
                  {
                    src: "/assets/smartwatch_itau-portrait.png",
                    width: 243,
                    height: 150,
                  },
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt="itau"
                    width={image.width}
                    height={image.height}
                    className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                    onClick={() => {
                      setModalInfo({
                        image: image.src,
                        description: t("itau_description"),
                        mobile: image.src.includes("mobile") ? true : false,
                        tecnologies: [],
                        links: [
                          {
                            figma:
                              "https://www.figma.com/design/bWyeFyFptVlKsvX6pFO3IC/Ita%C3%BA---Prot%C3%B3tipo%2FCanais?node-id=0-1&t=unC2xG6NJUy8NBRJ-1",
                            behance:
                              "https://www.behance.net/gallery/218042201/Ecossistema-digital-Itau",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Image
          className="-mt-[60px] sm:-mt-[50px] md:-mt-[80px] z-20"
          src="/assets/frontbottomwave.png"
          width={2000}
          height={500}
          alt="Bottom Wave"
        />
      </div>
      <div className="flex justify-center mt-10">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          {t("made_by_me")} 🩷
        </p>
      </div>
    </>
  );
};

export default MyProjects;
