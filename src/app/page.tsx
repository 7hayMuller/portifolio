"use client";

import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

import ClientOnly from "../components/ClientOnly";

import Loading from "../components/Loading";
import ContactForm from "../components/ContactForm";
import Card from "../components/Card";
import ProjectModal from "../components/ProjectModal";
import { Timeline } from "../components/ui/timeline";
import Spline from "@splinetool/react-spline";

import { motion } from "framer-motion";

import {
  FaBehance,
  FaChevronDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import Me from "../../public/assets/Me.png";

import { anton, pacifico, robotoMono } from "./layout";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});

const PortfolioSwiper = dynamic(() => import("../components/Swipper"), {
  ssr: false,
});

// const useDecryptText = (text: string, delay = 50, pause = 2000) => {
//   const [displayed, setDisplayed] = useState("");
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()";

//   const iterationRef = useRef(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const startAnimation = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     iterationRef.current = 0;

//     intervalRef.current = setInterval(() => {
//       setDisplayed(() => {
//         return text
//           .split("")
//           .map((char, i) => {
//             if (i < iterationRef.current) return text[i];
//             return characters[Math.floor(Math.random() * characters.length)];
//           })
//           .join("");
//       });

//       iterationRef.current += 1;

//       if (iterationRef.current > text.length) {
//         clearInterval(intervalRef.current!);

//         timeoutRef.current = setTimeout(() => {
//           startAnimation();
//         }, pause);
//       }
//     }, delay);
//   }, [delay, pause, text]);

//   useEffect(() => {
//     startAnimation();

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [startAnimation]);

//   return displayed;
// };

const About = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);

  //const decrypted = useDecryptText(t("get_in_touch"), 200, 1000);

  const ribbonText = useMemo(() => {
    return `UX/UI DESIGNER → ${t("frontend_developer_text")} → ${t(
      "my_projects",
    )?.toLocaleUpperCase()} → `.repeat(15);
  }, [t]);

  // Imagens
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

  const slides = [
    <div
      className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]"
      key={"remedia"}
    >
      <Card
        buttonTitle={t("see_studycase")}
        type="UX/UI + Front-end"
        intro={t("remedia_intro")}
        title={t("Remedia")}
        previewVideo="/assets/remedia_preview.webm"
        stack="Figma, React Native, Typescript, Expo ..."
        onClick={() => {
          setModalInfo({
            images: remediaImages,
            key: "remedia_description",
            tecnologies: ["figma", "React Native", "typescript", "expo"],
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
    </div>,
    <div
      className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]"
      key={"finny"}
    >
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
    </div>,
    <div
      className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]"
      key={"nearby"}
    >
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
              {
                github: "https://github.com/7hayMuller/nlw-nearby",
              },
            ],
          });
          setIsModalOpen(true);
        }}
      />
    </div>,
    <div
      className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]"
      key={"itau"}
    >
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
    </div>,
    <div
      className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]"
      key={"portfolio"}
    >
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
    </div>,
  ];

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
        {/* ------------------------------------------------------- */}
        {/* 🔹 HERO SECTION                                         */}
        {/* ------------------------------------------------------- */}

        <section
          id="hero"
          className="relative flex justify-center md:flex lg:flex-row-reverse flex-col md:flex-col min-h-[600px] md:h-full lg:min-h-[700px] lg:h-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="order-2 flex flex-1 justify-center items-center w-full lg:justify-end"
          >
            <div className="flex flex-col w-full max-w-3xl mt-5 md:mt-[50px] lg:mt-[80px] space-y-6">
              <span className="text-[#E5E5DD] font-bold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
                <ClientOnly>{t("hello")}</ClientOnly>
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

        {/* ------------------------------------------------------- */}
        {/* 🔹 INTRO SECTION                                        */}
        {/* ------------------------------------------------------- */}

        <div className="bg-gradient-to-b from-[#2a235c] via-[#181629] to-[#05020a]">
          <section
            id="introduction"
            className="flex flex-col lg:flex-row md:flex-col items-center justify-center text-center px-6 py-16 mt-[100px] lg:mb-[100px] md:py-16 lg:py-16"
          >
            <div className="relative mb-[50px] -mt-[60px] lg:mt-0 lg:mb-0 text-[25vw] lg:text-[150px] leading-none font-anton uppercase tracking-tight w-fit">
              <span
                className={`${anton.className} text-transparent stroke-white absolute top-0 lg:left-1/2 -translate-x-1/2 -translate-y-[0.40em] lg:-translate-y-[0.30em] z-0`}
              >
                <ClientOnly>{t("about")}</ClientOnly>
              </span>
              <span
                className={`${anton.className} text-[#3DF58C] relative z-10 block translate-y-[0.2em] lg:translate-y-[0.1em]`}
              >
                <ClientOnly>{t("me")}</ClientOnly>
              </span>
            </div>

            <p className="text-[#E5E5DD] lg:ml-[150px] text-left mt-2 max-w-3xl text-base">
              <ClientOnly>
                <Trans i18nKey="introduction" t={t} />
              </ClientOnly>
            </p>
          </section>

          {/* ------------------------------------------------------- */}
          {/* 🔹 RIBBON                     */}
          {/* ------------------------------------------------------- */}

          <div
            className="overflow-hidden lg:w-screen lg:flex lg:justify-center"
            id="projects"
          >
            <div className="marquee-container select-none">
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
                      <ClientOnly>{ribbonText}</ClientOnly>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* 🔹 PROJECTS                                             */}
          {/* ------------------------------------------------------- */}

          <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:-mt-[50px] md:py-16 lg:py-0">
            <PortfolioSwiper slides={slides} />;
          </section>

          {/* ------------------------------------------------------- */}
          {/* 🔹 SKILLS SECTION                                       */}
          {/* -------------------------------------------------------*/}
          <div id="skills-container">
            <section
              id="skills"
              className="relative flex flex-col lg:flex-row md:justify-center md:items-center justify-around items-start mx-auto px-6  mb-20 lg:mt-[200px] lg:mb-[200px] max-w-7xl"
            >
              <div
                id="cube-container"
                className="flex w-[500px] lg:w-1/2 -ml-[150px] justify-center items-center"
              >
                <Spline
                  scene="https://prod.spline.design/6zAYsxG7fggjhttr/scene.splinecode"
                  style={{ width: 500, height: 500 }}
                />
              </div>

              {/* TEXTO */}
              <div className="w-full lg:w-1/2 mt-15 lg:pl-12 text-left flex flex-col justify-center">
                <div className="flex flex-row flex-wrap items-end text-base text-[#E5E5DD] mb-5">
                  <h3
                    className={`${pacifico.className} text-5xl text-[#A27DFB] leading-none mr-2 mb-2`}
                  >
                    <ClientOnly>{t("i_develop")}</ClientOnly>
                  </h3>

                  <span className="text-base">
                    <ClientOnly>
                      <Trans i18nKey="skills" t={t} />
                    </ClientOnly>
                  </span>
                </div>

                <div className="text-[#E5E5DD] text-base mb-4">
                  {[2, 3, 4].map((num, i) => (
                    <ClientOnly key={i}>
                      <Trans i18nKey={`skills${num}`} t={t} />
                    </ClientOnly>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ------------------------------------------------------- */}
          {/* 🔹 TIMELINE SECTION                                     */}
          {/* ------------------------------------------------------- */}

          <section
            id="timeline"
            className="relative min-h-[200vh] lg:-mt-[150px] overflow-hidden mask-section"
          >
            <div className="relative max-w-4xl mx-auto text-center py-20">
              <h2 className="text-lg md:text-4xl text-[#E5E5DD]">
                <ClientOnly>{t("timeline_title")}</ClientOnly>
              </h2>
            </div>

            <div className="hidden lg:flex fixed inset-0 z-10">
              <Spline scene="https://prod.spline.design/t8REDGR78N-aTfE2/scene.splinecode" />
            </div>

            <Timeline
              data={[
                {
                  title: "2020",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "Transitioned from Civil Engineering into technology after completing a web development bootcamp. Worked as a Full Stack Developer, building production systems with modern JavaScript frameworks and RESTful APIs using Java and Spring Boot.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
                {
                  title: "2021",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "I joined SPOT Metrics as a Frontend Developer, where I started building scalable and data-driven interfaces using React, TypeScript, and modern front-end practices. I specialized in frontend development, the area I most connected with, beginning a journey focused on creating intuitive experiences supported by solid technical implementation.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
                {
                  title: "2022",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "Promoted to Mid-Level Frontend Developer, I took on greater responsibility in complex projects, working closely with designers and backend engineers to deliver high-performance, user-focused interfaces.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
                {
                  title: "2023",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "Alongside my role at SPOT Metrics, I started working as a freelance Frontend Developer through an e-commerce agency, building and maintaining online experiences for nationally recognized brands such as Democrata, Bagaggio, and Tecnos. Most of these projects were developed with JavaScript (Vanilla) and the VTEX platform, giving me solid experience in web performance, conversion optimization, and client communication. During this time, I also began my degree in Systems Analysis and Development.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
                {
                  title: "2024",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "I completed a professional course in UX/UI Design at EBAC (British School of Creative Arts), where I developed solid skills in user research, wireframing, prototyping, and usability testing. I began applying these concepts directly at SPOT Metrics, combining design thinking with my technical expertise to improve user experience and product usability.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
                {
                  title: "2025",
                  content: (
                    <p>
                      <ClientOnly>
                        {t(
                          "Promoted to a hybrid role as Frontend Developer & UX Designer at SPOT Metrics, I combine design strategy with technical implementation to deliver data-driven, user-centered experiences. I lead usability testing, design prototypes, and implement accessible, scalable front-end solutions. In parallel, now , I work as freelance on UX/UI projects, expanding my expertise in user research, prototyping, and creative direction.",
                        )}
                      </ClientOnly>
                    </p>
                  ),
                },
              ]}
            />
          </section>

          {/* ------------------------------------------------------- */}
          {/* 🔹 CONTACT SECTION                                      */}
          {/* ------------------------------------------------------- */}

          <section
            id="contact"
            className="relative flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex-row-reverse items-center justify-center mx-auto px-6 gap-16 max-w-7xl py-20 z-100"
          >
            {/* Title + Text + Socials */}
            <div className="lg:order-3 order-2 w-full max-w-3xl lg:max-w-[500px]">
              {/* <h2
                className={`flex justify-center lg:justify-start gap-2 text-[#e5e5dd] font-bold text-4xl lg:text-5xl text-center lg:text-left mb-6 ${robotoMono.className}`}
              >
                <ClientOnly>
                  <div className="relative text-[#A68CFB] drop-shadow-[0_0_5px_#2a235c] uppercase w-full break-words text-4xl lg:text-5xl text-center lg:text-left">
                    {decrypted}
                  </div>
                </ClientOnly>
              </h2> */}

              <p className="text-[#E5E5DD] text-center lg:text-left text-base md:text-lg">
                <ClientOnly>
                  <Trans i18nKey="contact_description" t={t} />
                </ClientOnly>
              </p>

              {/* Social Links */}
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

            {/* Contact Form */}
            <div className="order-3 lg:order-2 w-full max-w-5xl">
              <ContactForm />
            </div>
          </section>

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#3DF58C] shadow-[0_0_10px_#3DF58C]"></div>

          {/* ------------------------------------------------------- */}
          {/* 🔹 FOOTER                                               */}
          {/* ------------------------------------------------------- */}

          <div className="flex justify-center text-center w-full">
            <p
              className={`text-[12px] w-[300px] md:w-[300px] mt-6 mb-6 lg:w-full text-[#E5E5DD] opacity-50 ${robotoMono.className}`}
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
