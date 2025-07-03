"use client";

import Navbar from "./components/NavBar";
import Section from "./components/Section";
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

  const nearbyImages = [
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
  ];

  const itauImages = [
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
  ];

  //Finny

  //Portifolio

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
      <div className="bg-[#2A235C]">
        <section
          id="introduction"
          className={`relative flex flex-col  lg:flex-row-reverse
       h-auto lg:h-[600px] px-4 py-6 lg:py-12 lg:px-8`}
        >
          <div
            className={`relative flex flex-col  lg:flex-row-reverse h-auto lg:h-[600px] px-4 py-6 lg:py-12 lg:px-6`}
          >
            <div
              className={`order-1 lg:order-1 flex justify-center items-center lg:justify-between w-full lg:w-1/2 `}
            >
              <Image
                src={Me}
                alt="side-image"
                className="w-full h-auto max-w-[500px]"
              />
            </div>

            <div
              className={`order-1 lg:order-3 flex flex-1 justify-center lg:justify-between items-center w-full `}
            >
              <div className="w-full max-w-lg mt-5 lg:mt-8">
                <h2 className="text-[#e2e8c0] font-bold text-3xl mb-4 text-center lg:text-left">
                  <p className="flex justify-center lg:justify-start">
                    Me, Myself{" "}
                    <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> I
                  </p>
                </h2>
                <div className="text-[#e2e8c0] text-center lg:text-left">
                  <p>
                    <Trans i18nKey="introduction.greeting" t={t}>
                      Hi there! I’m Thayná Müller, a UX/UI designer and frontend
                      developer from Brazil, currently living in the beautiful
                      state of Rio de Janeiro.
                    </Trans>
                  </p>
                  <br />
                  <p>
                    <Trans i18nKey="introduction.hobbies" t={t}>
                      I’m driven by curiosity — I love traveling, discovering
                      new places, and immersing myself in different cultures.
                      All of that finds its way into my creative process because
                      I believe great ideas come from paying attention and
                      drawing on real-life experiences.
                    </Trans>
                  </p>
                  <br />
                  <p>
                    <Trans i18nKey="introduction.welcome" t={t}>
                      Here in my portfolio, you’ll find projects built on
                      research, user-centered design, and interfaces crafted to
                      delight and engage.
                    </Trans>
                  </p>
                  <br />
                  <p>
                    <Trans i18nKey="introduction.finish" t={t}>
                      Take a look at what I’ve created so far… maybe the next
                      big idea is something we’ll bring to life together!
                    </Trans>
                  </p>
                  <div
                    className="relative flex justify-center md:justify-start py-6 "
                    style={{ filter: "url(#goo)" }}
                  >
                    <div
                      className="relative flex justify-center py-6"
                      style={{ filter: "url(#goo)" }}
                    >
                      <button
                        className="relative inline-block text-center bg-[#F25D76] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
                           before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#F25D76] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
                           after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#F25D76] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100"
                        onClick={() => {
                          const section = document.getElementById("contact");
                          section?.scrollIntoView({ behavior: "smooth" });
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
          </div>
        </section>
      </div>

      <div id="projects" className="relative z-0 md:-mt-[130px] -mt-[100px]">
        <Image
          src="/assets/separator.png"
          alt="Divisão em forma de onda"
          width={1920}
          height={150}
          className="w-full object-cover"
        />
      </div>
      <div className="bg-[#181629]">
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-4 md:items-start md:justify-center gap-4">
            <Card
              buttonTitle={t("Ver estudo de caso")}
              type="UX/UI"
              title={t("Finny Cashback Goals")}
              previewVideo="/assets/finny_prev.webm"
              stack="Figma"
              highlight
              // onClick={() => {
              //   setModalInfo({
              //     image: image.src,
              //     description: t("nearby"),
              //     mobile: image.src.includes("mobile") ? true : false,
              //     tecnologies: ["React Native", "Expo"],
              //     links: [
              //       {
              //         github: "https://github.com/7hayMuller/nlw-nearby",
              //       },
              //     ],
              //   });
              //   setIsModalOpen(true);
              // }}
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
                    {
                      github: "https://github.com/7hayMuller/nlw-nearby",
                    },
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
                        "https://www.figma.com/design/bWyeFyFptVlKsvX6pFO3IC/Ita%C3%BA---Prot%C3%B3tipo%2FCanais?node-id=0-1&t=unC2xG6NJUy8NBRJ-1",
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
              // onClick={() => {
              //   setModalInfo({
              //     image: image.src,
              //     description: t("nearby"),
              //     mobile: image.src.includes("mobile") ? true : false,
              //     tecnologies: ["React Native", "Expo"],
              //     links: [
              //       {
              //         github: "https://github.com/7hayMuller/nlw-nearby",
              //       },
              //     ],
              //   });
              //   setIsModalOpen(true);
              // }}
            />
          </div>

          <div
            id="skills"
            className="flex flex-col lg:flex-row justify-center lg:justify-around items-center md:-mt-[20px] mt-[200px] gap-6"
          >
            <div className="relative text-center lg:text-left max-w-lg w-full mt-[100px]">
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
              <p className="text-[#e2e8c0]">
                <Trans>
                  Com <strong>React, Next.js e TypeScript</strong>, construo a
                  estrutura e a inteligência que fazem um projeto ganhar vida.
                </Trans>
              </p>
              <br />
              <p className="text-[#e2e8c0]">
                {" "}
                <Trans>
                  No <strong>Figma</strong>, experimento, pesquiso e penso em
                  cada interação para que tudo faça sentido para quem está do
                  outro lado da tela.
                </Trans>
              </p>
              <br />
              <p className="text-[#e2e8c0]">
                <Trans>
                  {" "}
                  <strong>Tailwind e SCSS</strong> entram como meus pincéis para
                  dar cor, forma e personalidade, criando interfaces que não só
                  funcionam, mas encantam.
                </Trans>
              </p>
              <br />
              <p className="text-[#e2e8c0]">
                <Trans i18nKey="skills_conclusion" t={t}>
                  <strong>Tudo isso com um propósito:</strong> desenvolver
                  projetos guiados por pesquisa, voltados para o usuário, que
                  criem conexões e gerem engajamento de verdade.
                </Trans>
              </p>
            </div>
            <Carousel />
          </div>
          <Section
            action={
              <div className="flex items-center mt-8 justify-center sm:justify-center md:justify-start lg:justify-start cursor-pointer">
                <a
                  className="mr-5"
                  href="https://github.com/7hayMuller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    fontSize={25}
                    className="text-[#e2e8c0] hover:text-[#F25D76] cursor-pointer"
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
                    className="text-[#e2e8c0] hover:text-[#F25D76] cursor-pointer"
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
                    className="text-[#e2e8c0] hover:text-[#F25D76] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/th4ymuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    fontSize={25}
                    className="text-[#e2e8c0] hover:text-[#F25D76] cursor-pointer"
                  />
                </a>
              </div>
            }
            reverse
            id="contact"
            content={
              <>
                <div className="relative mt-10 lg:text-start text-center">
                  <h1 className="inline-block text-[#e2e8c0] text-[36px] sm:text-[48px] lg:text-[50px] font-bold lg:mb-[60px]">
                    {t("contact_title")}{" "}
                    <strong className="text-[#F25D76]">{t("me")}</strong> 💻
                  </h1>
                </div>
                <p>{t("contact_description")}</p>
              </>
            }
            hasForm={
              <div className="order-3 lg:order-2 w-full lg:w-1/2">
                <ContactForm />
              </div>
            }
          />
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
