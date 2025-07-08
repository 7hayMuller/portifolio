"use client";

import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/me2.png";

import { Trans, useTranslation } from "react-i18next";
import Loading from "./components/Loading";
import Head from "next/head";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ContactForm from "./components/ContactForm";
import Card from "./components/Card";

import Image from "next/image";
import ProjectModal from "./components/ProjectModal";
import { useState } from "react";

const About = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);
  const [activeKey, setActiveKey] = useState<any>();

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
  console.log("active key", activeKey);
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

      <div className="bg-[#2A235C] min-h-[700px]">
        <section
          id="introduction"
          className="relative flex flex-col lg:flex-row-reverse h-auto lg:h-[600px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 gap-6"
        >
          <div className="order-1 flex justify-center items-center w-full lg:w-1/2">
            <Image
              src={Me}
              alt="side-image"
              className="w-full h-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mt-6"
            />
          </div>

          <div className="order-2 flex flex-1 justify-center items-center w-full lg:w-1/2 lg:justify-end lg:pl-6">
            <div className="w-full max-w-lg mt-5 lg:mt-20 space-y-4">
              <h2 className="text-[#e2e8c0] font-bold text-3xl text-center lg:text-left">
                <p className="flex justify-center lg:justify-start">
                  Me, Myself
                  <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> I
                </p>
              </h2>
              <div className="text-[#e2e8c0] text-center lg:text-left space-y-4">
                <p>
                  <Trans i18nKey="introduction.greeting" t={t} />
                </p>
                <p>
                  <Trans i18nKey="introduction.hobbies" t={t} />
                </p>
                <p>
                  <Trans i18nKey="introduction.welcome" t={t} />
                </p>
                <p>
                  <Trans i18nKey="introduction.finish" t={t} />
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      const section = document.getElementById("contact");
                      section?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="relative inline-block text-center bg-[#F25D76] text-white font-bold py-3 px-6 rounded-full
              text-base sm:text-lg min-w-[12em] hover:before:scale-100 hover:after:scale-100"
                  >
                    {t("say_hi")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="projects" className="relative z-0 md:-mt-[150px] -mt-[100px]">
        <Image
          src="/assets/separator.png"
          alt="Divisão em forma de onda"
          width={1920}
          height={150}
          className="w-full object-cover"
        />
      </div>

      <div className="bg-[#181629]">
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
          <div className="grid grid-cols-2 md:grid-cols-4 md:items-start md:justify-center gap-4">
            <Card
              buttonTitle={t("Ver estudo de caso")}
              type="UX/UI"
              title={t("Finny Cashback Goals")}
              previewVideo="/assets/finny_prev.webm"
              stack="Figma"
              highlight
            />
            <Card
              type="Front-end"
              title={t("Nearby")}
              stack="React Native, Expo , CSS"
              previewVideo="/assets/nearby_prev.webm"
              onClick={() => {
                setModalInfo({
                  images: nearbyImages,
                  description: t("nearby"),
                  tecnologies: ["React Native", "Expo", "CSS"],
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
              stack="ReactJs, Sass, Figma"
              previewVideo="/assets/itau_prev.webm"
              onClick={() => {
                setModalInfo({
                  images: itauImages,
                  description: t("itau_description"),
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
              type="UX/UI + Front-end"
              title={t("this_portfolio")}
              stack="ReactJs, Sass, Figma"
            />
          </div>

          <div
            id="skills"
            className="flex flex-col lg:flex-row justify-around items-center mt-[200px] gap-6"
          >
            <div className="relative text-center lg:text-left max-w-lg w-full lg:pl-10">
              <h2 className="text-[#e2e8c0] font-bold text-4xl mb-4">
                <span className="flex justify-center lg:justify-start">
                  Skills
                  <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> Tools
                </span>
              </h2>
              <p className="text-[#e2e8c0] mt-[20px]">
                <Trans i18nKey="skills" t={t}>
                  Essas são as ferramentas que uso para transformar{" "}
                  <strong>boas ideias</strong> em experiências digitais que
                  realmente contam histórias.
                </Trans>
              </p>
              <br />
              {["react", "next", "typescript", "javascript"].includes(
                activeKey
              ) ? (
                <p className="text-[#A68CFB] text-2xl font-noto font-mono font-thin drop-shadow-[0_0_5px_#ec4899]">
                  <Trans>
                    <i>"</i>Com{" "}
                    <strong className="text-[#C7C9D9]">
                      React, Next.js e TypeScript
                    </strong>
                    , construo a estrutura e a inteligência que fazem um projeto
                    ganhar vida.<i>"</i>
                  </Trans>
                </p>
              ) : activeKey === "figma" ? (
                <p
                  className={`text-[#A68CFB] text-2xl font-noto font-mono font-thin drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>"</i>No <strong className="text-[#C7C9D9]">Figma</strong>
                    , experimento, pesquiso e penso em cada interação para que
                    tudo faça sentido para quem está do outro lado da tela.
                    <i>"</i>
                  </Trans>
                </p>
              ) : ["tailwind", "sass"]?.includes(activeKey) ? (
                <p
                  className={`text-[#A68CFB] text-2xl font-noto font-mono font-thin drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>"</i>
                    <strong className="text-[#C7C9D9]">
                      Tailwind e SCSS
                    </strong>{" "}
                    entram como meus pincéis para dar cor, forma e
                    personalidade, criando interfaces que não só funcionam, mas
                    encantam.<i>"</i>
                  </Trans>
                </p>
              ) : (
                <p
                  className={`text-[#A68CFB] text-2xl font-noto font-mono font-thin drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>"</i>Com{" "}
                    <strong className="text-[#C7C9D9]">
                      React, Next.js e TypeScript
                    </strong>
                    , construo a estrutura e a inteligência que fazem um projeto
                    ganhar vida.<i>"</i>
                  </Trans>
                </p>
              )}
              <div className="container">
                <div className="blackhole">
                  <div className="megna">
                    <div className="black"></div>
                  </div>
                </div>
              </div>
            </div>
            <Carousel setActiveKey={setActiveKey} />
          </div>

          <div
            id="contact"
            className="flex flex-col lg:flex-row-reverse justify-around items-center lg:-mt-[300px] gap-6 w-full"
          >
            <div className="order-3 flex flex-1 lg:flex-[1.2] justify-center lg:justify-start items-center lg:pl-10 lg:mt-8">
              <div className="w-full max-w-xl">
                <h2 className="text-[#e2e8c0] font-bold lg:text-5xl text-center lg:text-left mb-5 lg:mb-11">
                  <span>
                    {t("contact_title")}{" "}
                    <strong className="text-[#E64765] font-noto font-mono">
                      {t("me")}
                    </strong>
                  </span>
                </h2>
                <p className="text-[#e2e8c0] text-center lg:text-left">
                  {t("contact_description")}
                </p>
                <div className="flex items-center mt-8 justify-center sm:justify-center md:justify-start lg:justify-start cursor-pointer lg:mb-6">
                  <a
                    className="mr-5"
                    href="https://github.com/7hayMuller"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      fontSize={25}
                      className="text-[#e2e8c0] hover:text-[#A68CFB]"
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
                      className="text-[#e2e8c0] hover:text-[#A68CFB]"
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
                      className="text-[#e2e8c0] hover:text-[#A68CFB]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/th4ymuller/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      fontSize={25}
                      className="text-[#e2e8c0] hover:text-[#A68CFB]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-3 lg:order-2 w-full lg:flex-[2] mt-10 lg:-mt-[50px]">
              <ContactForm />
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-10">
          <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
            {t("made_by_me")} 🩷
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
