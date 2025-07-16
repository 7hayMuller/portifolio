"use client";
import ClientOnly from "./components/ClientOnly";

import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/Me.png";
import { Trans } from "react-i18next";
import Loading from "./components/Loading";
import Head from "next/head";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ContactForm from "./components/ContactForm";
import Card from "./components/Card";

import Image from "next/image";
import ProjectModal from "./components/ProjectModal";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { t } from "i18next";
import Typewriter from "typewriter-effect";
import { anton, robotoMono } from "./_app";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);
  const [activeKey, setActiveKey] = useState<any>();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const nearbyImages = [
    { src: "/assets/nearby-splash-mobile.png", width: 243, height: 150 },
    { src: "/assets/nearby-start-mobile.png", width: 243, height: 150 },
    { src: "/assets/nearby-home-mobile.png", width: 243, height: 150 },
    { src: "/assets/nearby-homelist-mobile.png", width: 243, height: 150 },
    { src: "/assets/nearby-details-mobile.png", width: 243, height: 150 },
  ];

  const itauImages = [
    { src: "/assets/desktop_itau-front.png", width: 243, height: 150 },
    { src: "/assets/smartphone_itau-portrait.png", width: 243, height: 0 },
    { src: "/assets/smartwatch_itau-portrait.png", width: 243, height: 150 },
  ];

  const finnyImages = [
    { src: "/assets/finny_mobile_3.png", width: 300, height: 300 },
    { src: "/assets/finny_mobile_5.png", width: 300, height: 300 },
    { src: "/assets/finny_mobile_7.png", width: 300, height: 300 },
  ];

  const portfolioImages = [
    { src: "/assets/portfolio.png", width: 300, height: 300 },
    { src: "/assets/portfolio_mobile.png", width: 300, height: 300 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useDecryptText = (text: string, delay = 50, pause = 2000) => {
    const [displayed, setDisplayed] = useState("");
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()";
    const iterationRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAnimation = () => {
      iterationRef.current = 0;

      intervalRef.current = setInterval(() => {
        setDisplayed(() => {
          return text
            .split("")
            .map((char, i) => {
              if (i < iterationRef.current) return text[i];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iterationRef.current += 1;

        if (iterationRef.current > text.length) {
          clearInterval(intervalRef.current!);
          setTimeout(() => {
            startAnimation();
          }, pause);
        }
      }, delay);
    };

    useEffect(() => {
      startAnimation();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [text]);

    return displayed;
  };

  const decrypted = useDecryptText(t("get_in_touch"), 200, 1000);

  const Ribbon = ({
    text,
    bgColor = "bg-black",
    rotateClass = "rotate-[12deg]",
  }: {
    text: string;
    bgColor?: string;
    rotateClass?: string;
  }) => {
    const fullText = `${text}   `.repeat(10);

    return (
      <div
        className={`absolute top-[60px] left-1/2 -translate-x-1/2 ${rotateClass} w-[300%]`}
      >
        <div
          className={`${bgColor} text-white font-extrabold text-lg md:text-xl whitespace-nowrap py-2 px-6 shadow-md`}
          style={{ willChange: "transform" }}
        >
          {fullText}
        </div>
      </div>
    );
  };

  const RibbonX = () => {
    return (
      <div className="relative h-[500px] w-full overflow-hidden lg:mt-[100px]">
        <Ribbon
          text="MEUS PROJETOS → UX/UI DESIGNER → FRONTEND DEVELOPER →"
          bgColor="bg-[#0f172a]"
          rotateClass={"rotate-[10deg]"}
        />

        <Ribbon
          text="MEUS PROJETOS → UX/UI DESIGNER → FRONTEND DEVELOPER →"
          bgColor="bg-[#a78bfa]"
          rotateClass={"rotate-[-10deg]"}
        />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Frontend Developer | UX/UI</title>
      </Head>
      <Loading />
      <Navbar />

      {isModalOpen && (
        <ProjectModal
          onClose={() => setIsModalOpen(false)}
          modalInfo={modalInfo}
        />
      )}
      <section
        id="hero"
        className="relative flex justify-center md:flex lg:flex-row-reverse flex-col md:flex-col md:h-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-16"
      >
        <div className="order-1 flex justify-center items-center w-full lg:w-1/2">
          <Image
            src={Me}
            alt="side-image"
            className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>

        <div className="order-1 lg:order-2 flex flex-1 justify-center items-center w-full lg:justify-end">
          <div className="flex flex-col w-full max-w-3xl mt-5 md:mt-[50px] lg:mt-[80px] space-y-6">
            <h2 className="text-[#E5E5DD] font-bold font-roboto text-3xl md:text-3xl lg:text-4xl lg:mb-4 text-center lg:text-left">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi! I'm Thayná. Welcome aboard my spaceship.")
                    .pauseFor(800)
                    .typeString(" I'm a Frontend Developer")
                    .pauseFor(1000)
                    .typeString(" & UX/UI Designer from Br4z17.")
                    .deleteChars(7)
                    .pauseFor(800)
                    .typeString("everywhere.")
                    .start();
                }}
                options={{
                  delay: 80,
                  deleteSpeed: 20,
                  loop: false,
                }}
              />
            </h2>

            <div className="flex justify-center lg:justify-start space-x-10 mt-4">
              <button className="custom-btn btn-7">
                <span>
                  <ClientOnly>{t("say_hi")}</ClientOnly>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#2a235c] via-[#181629] to-[#05020a]">
        <section
          id="introduction"
          className="flex flex-col lg:flex-row md:flex-col items-center justify-center text-center px-6 py-16 mt-[100px] lg:mt-0 md:py-16 lg:py-16"
        >
          <div className="relative mb-[50px] -mt-[60px] lg:mt-0 lg:mb-0 text-[25vw] lg:text-[12vw] leading-none font-anton uppercase tracking-tight w-fit">
            <span
              className={`${anton.className} text-transparent stroke-white absolute top-0 lg:left-1/2 -translate-x-1/2 -translate-y-[0.40em] lg:-translate-y-[0.25em] z-0`}
            >
              <ClientOnly>{t("about")}</ClientOnly>
            </span>
            <span
              className={`${anton.className} text-[#3DF58C] relative z-10 block translate-y-[0.2em] lg:translate-y-[0.1em]`}
            >
              <ClientOnly>{t("me")}</ClientOnly>
            </span>
          </div>

          <p className="text-[#E5E5DD] lg:ml-[100px] text-left mt-2 max-w-3xl text-sm md:text-base">
            <ClientOnly>
              <Trans i18nKey="introduction" t={t} />
            </ClientOnly>
          </p>
        </section>

        <section
          className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-16"
          id="projects"
        >
          <RibbonX />
          {isMobile || isTablet ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
              }}
              style={{ maxWidth: "100%", width: "100%", marginTop: -300 }}
            >
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <div className="w-full max-w-[340px]">
                  <Card
                    buttonTitle={t("see_studycase")}
                    type="UX/UI"
                    intro={t("finny_intro")}
                    title={t("Finny Cashback Goals")}
                    previewVideo="/assets/finny_prev.webm"
                    stack="Figma"
                    onClick={() => {
                      setModalInfo({
                        images: finnyImages,
                        key: "finny_description",
                        tecnologies: ["figma"],
                        links: [
                          {
                            medium:
                              "https://medium.com/@thaynamuller88/finny-cashback-goals-db0509b21a6d",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <div className="w-full max-w-[340px]">
                  <Card
                    type="Front-end"
                    title={t("Nearby")}
                    stack="React Native, Typescript, Expo e CSS"
                    intro={t("nearby_intro")}
                    previewVideo="/assets/nearby_prev.webm"
                    onClick={() => {
                      setModalInfo({
                        images: nearbyImages,
                        key: "nearby",
                        tecnologies: [
                          "React Native",
                          "typescript",
                          "expo",
                          "css",
                        ],
                        links: [
                          {
                            github: "https://github.com/7hayMuller/nlw-nearby",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <div className="w-full max-w-[340px]">
                  <Card
                    type="UX/UI"
                    title={t("itau_title")}
                    buttonTitle={t("see_studycase")}
                    intro={t("itau_intro")}
                    stack="Figma"
                    previewVideo="/assets/itau_prev.webm"
                    onClick={() => {
                      setModalInfo({
                        images: itauImages,
                        key: "itau_description",
                        tecnologies: ["figma"],
                        links: [
                          {
                            figma:
                              "https://www.figma.com/design/bWyeFyFptVlKsvX6pFO3IC/Ita%C3%BA---Prot%C3%B3tipo%2FCanais?node-id=0-1",
                            behance:
                              "https://www.behance.net/gallery/218042201/Ecossistema-digital-Itau",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <div className="w-full max-w-[340px]">
                  <Card
                    type="Front-end"
                    intro={t("portfolio_intro")}
                    title={t("this_portfolio")}
                    stack="Next.js, Typescript e Tailwind"
                    previewVideo="/assets/portfolio.webm"
                    onClick={() => {
                      setModalInfo({
                        images: portfolioImages,
                        key: "portfolio_description",
                        tecnologies: ["next", "typescript", "tailwind"],
                        links: [
                          {
                            github: "https://github.com/7hayMuller/portifolio",
                          },
                        ],
                      });
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 md:items-start md:justify-center mb-10 lg:-mt-[200px] gap-4">
              <Card
                buttonTitle={t("see_studycase")}
                type="UX/UI"
                title={t("Finny Cashback Goals")}
                intro={t("finny_intro")}
                previewVideo="/assets/finny_prev.webm"
                stack="Figma"
                highlight
                onClick={() => {
                  setModalInfo({
                    images: finnyImages,
                    key: "finny_description",
                    tecnologies: ["figma"],
                    links: [
                      {
                        medium:
                          "https://medium.com/@thaynamuller88/finny-cashback-goals-db0509b21a6d",
                      },
                    ],
                  });
                  setIsModalOpen(true);
                }}
              />
              <Card
                type="Front-end"
                title={t("Nearby")}
                stack="React Native, Typescript, Expo e CSS"
                intro={t("nearby_intro")}
                previewVideo="/assets/nearby_prev.webm"
                onClick={() => {
                  setModalInfo({
                    images: nearbyImages,
                    key: "nearby",
                    tecnologies: ["React Native", "typescript", "expo", "css"],
                    links: [
                      { github: "https://github.com/7hayMuller/nlw-nearby" },
                    ],
                  });
                  setIsModalOpen(true);
                }}
              />
              <Card
                type="UX/UI"
                title={t("itau_title")}
                stack="Figma"
                previewVideo="/assets/itau_prev.webm"
                buttonTitle={t("see_studycase")}
                intro={t("itau_intro")}
                onClick={() => {
                  setModalInfo({
                    images: itauImages,
                    key: "itau_description",
                    tecnologies: ["figma"],
                    links: [
                      {
                        figma:
                          "https://www.figma.com/design/bWyeFyFptVlKsvX6pFO3IC/Ita%C3%BA---Prot%C3%B3tipo%2FCanais?node-id=0-1",
                        behance:
                          "https://www.behance.net/gallery/218042201/Ecossistema-digital-Itau",
                      },
                    ],
                  });
                  setIsModalOpen(true);
                }}
              />
              <Card
                type="Front-end"
                title={t("this_portfolio")}
                previewVideo="/assets/portfolio.webm"
                stack="Next.js, Typescript e Tailwind"
                intro={t("portfolio_intro")}
                onClick={() => {
                  setModalInfo({
                    images: portfolioImages,
                    key: "portfolio_description",
                    tecnologies: ["next", "typescript", "tailwind"],
                    links: [
                      {
                        github: "https://github.com/7hayMuller/portifolio",
                      },
                    ],
                  });
                  setIsModalOpen(true);
                }}
              />
            </div>
          )}
        </section>

        <section
          id="skills"
          className="relative flex flex-col lg:flex-row md:justify-center md:items-center justify-around items-start py-12 md:py-16 lg:py-16 mx-auto px-8 gap-12 max-w-7xl"
        >
          <div className="text-center md:text-center lg:-mt-[200px] lg:text-left lg:text-lg max-w-3xl w-full">
            <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-4xl lg:text-4xl mb-4 bold-text">
              <span className="flex justify-center md:flex md:justify-center lg:justify-start">
                Skills
                <strong className="text-[#3DF58C] ml-1 mr-1">&</strong> Tools
              </span>
            </h2>
            <p className="text-[#E5E5DD] lg:w-[600px] text-sm md:text-lg lg:text-lg mt-[20px]">
              <ClientOnly>
                <Trans i18nKey="skills" t={t} />
              </ClientOnly>
            </p>
            <br />
            <div className="block lg:hidden w-full md:mt-[50px] md:mb-[80px]">
              <Carousel setActiveKey={setActiveKey} />
            </div>
            <div className="lg:w-[600px] mt-[30px]">
              {["react", "next", "typescript", "javascript"].includes(
                activeKey
              ) ? (
                <ClientOnly>
                  <p
                    className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl ${robotoMono.className} drop-shadow-[0_0_5px_#ec4899]`}
                  >
                    <Trans i18nKey={"tech_skills"} t={t} />
                  </p>
                </ClientOnly>
              ) : activeKey === "figma" ? (
                <ClientOnly>
                  <p
                    className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl ${robotoMono.className} drop-shadow-[0_0_5px_#ec4899]`}
                  >
                    <Trans i18nKey={"figma_skills"} t={t} />
                  </p>
                </ClientOnly>
              ) : ["tailwind", "sass"]?.includes(activeKey) ? (
                <ClientOnly>
                  <p
                    className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl ${robotoMono.className} drop-shadow-[0_0_5px_#ec4899]`}
                  >
                    <Trans i18nKey={"design_skills"} t={t} />
                  </p>
                </ClientOnly>
              ) : (
                <ClientOnly>
                  <p
                    className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl ${robotoMono.className} drop-shadow-[0_0_5px_#ec4899]`}
                  >
                    <Trans i18nKey={"tech_skills"} t={t} />
                  </p>
                </ClientOnly>
              )}
            </div>
            {/* <div className="lg:px-0 flex justify-center items-center md:flex md:justify-center md:items-center lg:flex lg:justify-start lg:items-start mt-[50px] md:px-8 lg:ml-[40px]">
              <div className="blackhole">
                <div className="megna">
                  <div className="black"></div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="hidden lg:block w-full lg:w-[40%] relative lg:min-h-[800px] md:mt-[20px]">
            <div className="lg:sticky lg:top-1/2 lg:mt-[50px] lg:-translate-y-1/2">
              <Carousel setActiveKey={setActiveKey} />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex-row-reverse justify-around items-start mx-auto px-10 gap-12 max-w-7xl py-12 md:py-16 lg:-mt-[150px]"
        >
          <div className="order-3 flex justify-center lg:justify-start items-center">
            <div className="flex flex-col max-w-3xl lg:w-[500px] w-full">
              <h2
                className={`flex justify-center lg:justify-start gap-2 text-[#E5E5DD] font-bold lg:text-5xl text-4xl text-center mb-[20px] lg:text-left md:mb-[20px] lg:mt-10 lg:mb-11 ${robotoMono.className}`}
              >
                <span>
                  <ClientOnly>
                    <div
                      className={`relative text-[10vw] lg:text-[12vw] ${robotoMono.className} uppercase w-fit`}
                    >
                      <h2 className="text-5xl text-[#A68CFB] drop-shadow-[0_0_5px_#2a235c] text-center">
                        {decrypted}
                      </h2>
                    </div>
                  </ClientOnly>
                </span>
              </h2>
              <p className="text-[#E5E5DD] text-center text-sm md:text-lg lg:text-lg lg:text-left lg:w-[600px]">
                <ClientOnly>
                  <Trans i18nKey="contact_description" t={t} />
                </ClientOnly>
              </p>
              <div className="flex items-center md:flex md:justify-center lg:mt-[50px] md:mt-10 mt-10 justify-center  lg:justify-start cursor-pointer lg:mb-6">
                <a
                  className="mr-5"
                  href="https://github.com/7hayMuller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    fontSize={25}
                    className="text-[#E5E5DD] hover:text-[#3DF58C]"
                  />
                </a>
                <a
                  className="mr-5"
                  href="https://www.linkedin.com/in/thaynamuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    fontSize={25}
                    className="text-[#E5E5DD] hover:text-[#3DF58C]"
                  />
                </a>
                <a
                  className="mr-5"
                  href="https://www.behance.net/thaynamuller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance
                    fontSize={25}
                    className="text-[#E5E5DD] hover:text-[#3DF58C]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/th4ymuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    fontSize={25}
                    className="text-[#E5E5DD] hover:text-[#3DF58C]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="order-3 lg:order-2 w-full lg:flex-[2]">
            <ContactForm />
          </div>
        </section>
        <div className="h-[1px] w-full bg-[#3DF58C] shadow-[0_0_10px_#3DF58C]"></div>
        <div className="flex justify-center text-center w-full">
          <p
            className={`text-[12px] w-[300px] md:w-[300px] mt-6 mb-6 lg:w-full text-[#E5E5DD] opacity-50 ${robotoMono.className} `}
          >
            <ClientOnly>{t("made_by_me")}</ClientOnly>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
