"use client";

import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/Me.png";
import Et from "../../public/assets/contact_me.png";

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

      <div className="bg-[#2A235C] min-h-[800px]">
        <section
          id="introduction"
          className="relative flex justify-center md:flex lg:flex-row-reverse flex-col md:flex-col h-auto lg:h-[600px] md:h-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-12"
        >
          <div className="lg:order-1 order-2 flex justify-center items-center w-full lg:w-1/2">
            <Image
              src={Me}
              alt="side-image"
              className="w-full h-auto max-w-[300px] md:max-w-[500px] lg:max-w-[600px] "
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-1 justify-center items-center w-full lg:justify-end">
            <div className="flex flex-col w-full max-w-3xl mt-5 md:mt-[50px] lg:mt-[80px] space-y-4">
              <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-3xl lg:text-4xl lg:mb-4 text-center lg:text-left">
                <p className="flex justify-center lg:justify-start font-roboto">
                  Me, Myself
                  <strong className="text-[#3DF58C] ml-2 mr-2">&</strong> I
                </p>
              </h2>
              <div className="text-[#E5E5DD] text-center text-sm md:text-[16px] lg:text-[16px] lg:text-left space-y-4 font-thin">
                <p>
                  <Trans i18nKey="introduction" t={t} />
                </p>

                <div className="flex justify-center lg:justify-start">
                  <div
                    className="relative flex justify-center mt-6 mb-6 md:mt-6 md:mb-6 lg:mt-6"
                    style={{ filter: "url(#goo)" }}
                  >
                    <button
                      className="relative inline-block text-center bg-[#15132B] text-[#A68CFB] font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
        before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#15132B] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
        after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#15132B] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100 hover:text-[#3DF58C]"
                      onClick={() => {
                        const section = document.getElementById("contact");
                        section?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      {t("say_hi")}
                    </button>

                    <svg
                      className="absolute inset-0 w-0 h-0"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                          />
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                          />
                          <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="absolute md:relative lg:relative z-0 -mt-[60px] md:-mt-[150px] ">
        <Image
          src="/assets/separator.png"
          alt="Divisão em forma de onda"
          width={1920}
          height={150}
          className="w-full object-cover"
        />
      </div> */}

      <div className="bg-[#181629] rounded-tl-[100px] rounded-tr-[100px] -mt-[150px] shadow-inner drop-shadow-[0_0_20px_#ec4899] shadow-[#2A235C]/80">
        <section
          className="relative max-w-7xl mx-auto px-6 -mt-[10px] lg:px-8 py-6 lg:py-12 gap-12"
          id="projects"
        >
          <div className="order-1 lg:order-2 flex flex-1 justify-center items-center w-full lg:justify-start">
            <div className="flex flex-col w-full max-w-3xl mt-5 md:mt-[50px] lg:mt-[80px] lg:mb-10 space-y-4">
              <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-3xl lg:text-4xl lg:mb-4 text-center lg:text-left">
                <p className="flex justify-center lg:justify-start font-roboto">
                  Projetos
                </p>
              </h2>
            </div>
          </div>
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
        </section>

        <section
          id="skills"
          className="relative flex flex-col md:flex md:flex-col lg:flex-row  md:justify-center md:items-center justify-around items-start lg:py-12 mx-auto px-8 py-6 gap-12 max-w-7xl"
        >
          <div className="text-center md:text-center lg:-mt-[200px] lg:text-left lg:text-lg max-w-xl w-full">
            <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-4xl lg:text-4xl mb-4 font-roboto">
              <span className="flex justify-center md:flex md:justify-center lg:justify-start">
                Skills
                <strong className="text-[#3DF58C] ml-1 mr-1">&</strong> Tools
              </span>
            </h2>
            <p className="text-[#E5E5DD] text-sm md:text-lg lg:text-lg mt-[20px] font-thin">
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
              <p className="text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto font-thin drop-shadow-[0_0_5px_#ec4899]">
                <Trans>
                  <i>"</i>Com{" "}
                  <strong className="text-[#E5E5DD]">
                    React, Next.js e TypeScript
                  </strong>
                  , construo a estrutura e a inteligência que fazem um projeto
                  ganhar vida.<i>"</i>
                </Trans>
              </p>
            ) : activeKey === "figma" ? (
              <p
                className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto font-thin drop-shadow-[0_0_5px_#ec4899]`}
              >
                <Trans>
                  <i>"</i>No <strong className="text-[#E5E5DD]">Figma</strong>,
                  experimento, pesquiso e penso em cada interação para que tudo
                  faça sentido para quem está do outro lado da tela.
                  <i>"</i>
                </Trans>
              </p>
            ) : ["tailwind", "sass"]?.includes(activeKey) ? (
              <p
                className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto font-thin drop-shadow-[0_0_5px_#ec4899]`}
              >
                <Trans>
                  <i>"</i>
                  <strong className="text-[#E5E5DD]">
                    Tailwind e SCSS
                  </strong>{" "}
                  entram como meus pincéis para dar cor, forma e personalidade,
                  criando interfaces que não só funcionam, mas encantam.<i>"</i>
                </Trans>
              </p>
            ) : (
              <p
                className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto font-thin drop-shadow-[0_0_5px_#ec4899]`}
              >
                <Trans>
                  <i>"</i>Com{" "}
                  <strong className="text-[#E5E5DD]">
                    React, Next.js e TypeScript
                  </strong>
                  , construo a estrutura e a inteligência que fazem um projeto
                  ganhar vida.<i>"</i>
                </Trans>
              </p>
            )}
            <div className="lg:px-0 flex justify-center items-center md:flex md:justify-center md:items-center lg:flex lg:justify-start lg:items-start mt-[50px] md:px-8 lg:ml-[40px]">
              <div className="blackhole">
                <div className="megna">
                  <div className="black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[50px] lg:w-[40%] relative lg:min-h-[800px]">
            <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
              <Carousel setActiveKey={setActiveKey} />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex-row-reverse justify-around items-start md:mt-[100px] lg:-mt-[200px] lg:py-12 mx-auto px-10 py-6 gap-12 max-w-7xl"
        >
          <div className="order-3 flex justify-center lg:justify-start items-center">
            <div className="flex flex-col max-w-xl w-full">
              <h2 className="flex justify-center lg:justify-start gap-2 text-[#E5E5DD] font-bold lg:text-5xl text-4xl text-center lg:text-left lg:mt-10 lg:mb-11 font-roboto">
                <span>
                  {t("contact_title")}{" "}
                  <strong className="text-[#E64765] font-roboto">
                    {t("me")}
                  </strong>
                </span>
                <Image alt="et" src={Et} width={50} height={50} />
              </h2>
              <p className="text-[#E5E5DD] text-center text-sm md:text-lg lg:text-lg lg:text-left font-thin">
                {t("contact_description")}
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
          <div className="order-3 lg:order-2 w-full lg:flex-[2] -mt-[30px] md:-mt-[80px] lg:-mt-[50px]">
            <ContactForm />
          </div>
        </section>
        <div className="border-b-[0.08px] opacity-5"></div>
        <div className="flex justify-center mt-6">
          <p className="text-[12px] text-[#E5E5DD] opacity-50 font-roboto mb-6">
            {t("made_by_me")}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
