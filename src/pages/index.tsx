"use client";
import ClientOnly from "./components/ClientOnly";

import { motion, Variants } from "framer-motion";
import Navbar from "./components/NavBar";

import Me from "../../public/assets/Me.png";
import { Trans } from "react-i18next";
import Loading from "./components/Loading";
import Head from "next/head";
import {
  FaBehance,
  FaChevronDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import ContactForm from "./components/ContactForm";
import Card from "./components/Card";

import Image from "next/image";
import ProjectModal from "./components/ProjectModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { t } from "i18next";

import { anton, pacifico, robotoMono } from "./_app";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ShapeHero from "@/components/kokonutui/shape-hero";
import Carousel from "./components/Carousel";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);

  const containerRef = useRef(null);

  const nearbyImages = [
    { src: "/assets/nearby-splash-mobile.png", width: 500, height: 500 },
    { src: "/assets/nearby-start-mobile.png", width: 500, height: 500 },
    { src: "/assets/nearby-home-mobile.png", width: 500, height: 500 },
    { src: "/assets/nearby-homelist-mobile.png", width: 500, height: 500 },
    { src: "/assets/nearby-details-mobile.png", width: 500, height: 500 },
  ];

  const remediaImages = [
    { src: "/assets/remedia1.png", width: 243, height: 150 },
    { src: "/assets/remedia.png", width: 243, height: 150 },
    { src: "/assets/remedia2.png", width: 243, height: 150 },
    { src: "/assets/remedia3.png", width: 243, height: 150 },
    { src: "/assets/remedia4.png", width: 243, height: 150 },
    { src: "/assets/remedia5.png", width: 243, height: 150 },
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

  const useDecryptText = (text: string, delay = 50, pause = 2000) => {
    const [displayed, setDisplayed] = useState("");
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()";
    const iterationRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAnimation = useCallback(() => {
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
    }, [delay, pause, text]);

    useEffect(() => {
      startAnimation();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [text, startAnimation]);

    return displayed;
  };
  const decrypted = useDecryptText(t("get_in_touch"), 200, 1000);

  const ribbonText = `UX/UI DESIGNER → ${t("frontend_developer_text")} → ${t(
    "my_projects",
  ).toLocaleUpperCase()} →  `.repeat(30);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("carousel-container");
      const section = document.getElementById("skills");

      if (!container || !section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const scrollOffset = Math.max(-200, -sectionTop);

      const maxScroll = section.offsetHeight - container.offsetHeight - 50;

      const translateY = Math.min(scrollOffset, maxScroll);
      container.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="overflow-hidden">
        <section
          id="hero"
          className="relative flex justify-center md:flex lg:flex-row-reverse flex-col md:flex-col min-h-[600px] md:h-full lg:min-h-[700px] lg:h-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-6 "
        >
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="order-1 flex justify-center items-center w-full lg:w-1/2 min-h-[400px]"
          >
            <Image
              src={Me}
              alt="side-image"
              className="w-full max-w-[400px] -mt-[50px] md:max-w-[600px] lg:max-w-[700px] lg:-mt-[100px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="order-2 flex flex-1 justify-center items-center w-full lg:justify-end"
          >
            <div className="flex flex-col w-full max-w-3xl mt-5 md:mt-[50px] lg:mt-[80px] space-y-6">
              <span className="text-[#E5E5DD] font-bold text-2xl md:text-3xl lg:text-4xl  text-center lg:text-left">
                <ClientOnly>{t("hello")}</ClientOnly>{" "}
              </span>
              <span className="text-[#E5E5DD] font-bold text-2xl md:text-3xl lg:text-4xl lg:mb-4 text-center lg:text-left">
                <ClientOnly>
                  {t("present")}
                  {t("present_2")}
                </ClientOnly>
              </span>

              <div className="flex justify-center lg:justify-start space-x-10">
                <button
                  className="custom-btn btn-7 mt-4"
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>
                    <ClientOnly>{t("say_hi")}</ClientOnly>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>
        <div className="flex flex-col items-center justify-center text-center lg:-mt-[150px]">
          <FaChevronDown
            className="text-gray-600 mt-2 blink-scroll-indicator"
            size={28}
          />
        </div>

        <div className="bg-gradient-to-b from-[#2a235c] via-[#181629] to-[#05020a]">
          <section
            id="introduction"
            className="flex flex-col lg:flex-row md:flex-col items-center justify-center text-center px-6 py-16 mt-[100px] lg:mt-0 md:py-16 lg:py-16"
          >
            <div className="relative mb-[50px] -mt-[60px] lg:mt-0 lg:mb-0 text-[25vw] lg:text-[150px] leading-none font-anton uppercase tracking-tight w-fit">
              <span
                className={`${anton.className} text-transparent stroke-white absolute top-0 lg:left-1/2 -translate-x-1/2 -translate-y-[0.40em] lg:-translate-y-[0.30em]  z-0`}
              >
                <ClientOnly>{t("about")}</ClientOnly>
              </span>
              <span
                className={`${anton.className} text-[#3DF58C] relative z-10 block translate-y-[0.2em] lg:translate-y-[0.1em]`}
              >
                <ClientOnly>{t("me")}</ClientOnly>
              </span>
            </div>

            <p className="text-[#E5E5DD] lg:ml-[150px] text-left mt-2 max-w-3xl text-sm md:text-base">
              <ClientOnly>
                <Trans i18nKey="introduction" t={t} />
              </ClientOnly>
            </p>
          </section>

          <div
            className="overflow-hidden lg:w-screen lg:flex lg:justify-center"
            id="projects"
          >
            <div className="marquee-container">
              <div className="marquee marquee-top">
                <div className="marquee-track">
                  <div className="content top">
                    <span>
                      <ClientOnly>{ribbonText}</ClientOnly>
                    </span>
                  </div>
                </div>
              </div>

              <div className="marquee marquee-bottom">
                <div className="marquee-track marquee-track-reverse">
                  <div className="content bottom">
                    <span>
                      {" "}
                      <ClientOnly>{ribbonText}</ClientOnly>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:-mt-[50px] lg:mb-[150px] md:py-16 lg:py-0">
            <button
              className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 bg-white/10 backdrop-blur hover:bg-white/20 transition shadow md:flex hidden"
              aria-label="Anterior"
            >
              <BiChevronLeft size={25} color="#fff" />
            </button>

            <button
              className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 bg-white/10 backdrop-blur hover:bg-white/20 transition shadow md:flex hidden"
              aria-label="Próximo"
            >
              <BiChevronRight size={25} color="#fff" />
            </button>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={false}
              autoHeight={true}
              observer={true}
              observeParents={true}
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: false },
                400: { slidesPerView: 1.1, centeredSlides: true },
                768: { slidesPerView: 2, centeredSlides: false },
                1024: { slidesPerView: "auto", centeredSlides: false },
              }}
              className="w-full overflow-visible"
            >
              <SwiperSlide className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto">
                <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
                  <Card
                    buttonTitle={t("see_studycase")}
                    type="UX/UI + Front-end"
                    intro={t("remedia_intro")}
                    title={t("Remedia")}
                    highlight
                    previewVideo="/assets/remedia_preview.webm"
                    stack="Figma, React Native, Typescript, Expo ..."
                    onClick={() => {
                      setModalInfo({
                        images: remediaImages,
                        key: "remedia_description",
                        tecnologies: [
                          "figma",
                          "React Native",
                          "typescript",
                          "expo",
                        ],
                        links: [
                          {
                            medium:
                              "https://medium.com/@thaynamuller88/problem-analysis-market-research-3aefb2f3b8cf",
                          },
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

              <SwiperSlide className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto">
                <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
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

              <SwiperSlide className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto">
                <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
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

              <SwiperSlide className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto">
                <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
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
                          },
                          {
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

              <SwiperSlide className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto">
                <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
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
          </section>

          <section
            id="skills-hero"
            className="relative w-full flex items-center justify-center h-[500px] lg:-mt-[100px]"
          >
            <ShapeHero title1="Skills &" title2="Tools" />
          </section>

          <section
            id="skills"
            className="relative w-full flex flex-col lg:flex-row items-start justify-between gap-12 px-6 lg:px-16 lg:mt-[200px] py-16"
          >
            <div className="block lg:hidden w-full md:mt-[50px] md:mb-[80px]">
              <Carousel />
            </div>
            <div className="hidden lg:flex w-full lg:w-1/2 relative justify-center">
              <div
                id="carousel-container"
                className="relative will-change-transform"
              >
                <div ref={containerRef} className="relative">
                  <Carousel />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-left flex flex-col justify-center">
              <motion.div
                className="flex flex-row flex-wrap items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-[#E5E5DD] text-sm md:text-base text-muted-foreground leading-relaxed inline align-middle">
                  <h3
                    className={`${pacifico.className} text-4xl md:text-5xl text-[#A27DFB] leading-[1] align-middle mr-2`}
                    style={{ display: "inline", verticalAlign: "baseline" }}
                  >
                    <ClientOnly>{t("i_develop")}</ClientOnly>
                  </h3>
                  <ClientOnly>
                    <Trans i18nKey="skills" t={t} />
                  </ClientOnly>
                </div>
              </motion.div>

              {[2, 3, 4].map((num, i) => (
                <motion.p
                  key={num}
                  className="text-[#E5E5DD] text-sm md:text-base text-muted-foreground leading-relaxed mb-4"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    delay: (i + 1) * 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <ClientOnly>
                    <Trans i18nKey={`skills${num}`} t={t} />
                  </ClientOnly>
                </motion.p>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="relative flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex-row-reverse items-center justify-center mx-auto px-6 gap-16 max-w-7xl py-20 z-100"
          >
            <div className="lg:order-3 order-2 w-full max-w-3xl lg:max-w-[500px]">
              <h2
                className={`flex justify-center lg:justify-start gap-2 text-[#E5E5DD] font-bold text-4xl lg:text-5xl text-center lg:text-left mb-6 ${robotoMono.className}`}
              >
                <ClientOnly>
                  <div className="relative text-[#A68CFB] drop-shadow-[0_0_5px_#2a235c] uppercase w-full break-words text-4xl lg:text-5xl text-center lg:text-left">
                    {decrypted}
                  </div>
                </ClientOnly>
              </h2>
              <p className="text-[#E5E5DD] text-center lg:text-left text-sm md:text-lg">
                <ClientOnly>
                  <Trans i18nKey="contact_description" t={t} />
                </ClientOnly>
              </p>

              <div className="flex justify-center lg:justify-start gap-5 mt-10 mb-6 cursor-pointer">
                <a
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

            <div className="order-3 lg:order-2 w-full max-w-3xl">
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
      </div>
    </>
  );
};

export default About;
