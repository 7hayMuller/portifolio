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
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { t } from "i18next";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);
  const [activeKey, setActiveKey] = useState<any>();
  const [isMobile, setIsMobile] = useState(false);

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
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="bg-[#2A235C] min-h-[1060px] lg:min-h-[800px] md:min-h-[900px]">
        <section
          id="introduction"
          className="relative flex justify-center md:flex lg:flex-row-reverse flex-col md:flex-col h-auto lg:h-[600px] md:h-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-12"
        >
          <div className="order-1 flex justify-center items-center w-full lg:w-1/2">
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
              <div className="text-[#E5E5DD] text-center text-sm md:text-[16px] lg:text-[16px] lg:text-left space-y-4">
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

      <div className="bg-gradient-to-b from-[#181629] via-[#100c1a] to-[#05020a] rounded-tl-[80px] rounded-tr-[80px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] md:rounded-tl-[100px] md:rounded-tr-[100px] -mt-[150px] shadow-inner drop-shadow-[0_0_20px_#ec4899] shadow-[#2A235C]/80">
        <section
          className="relative max-w-7xl mx-auto px-6 -mt-[10px] lg:px-8 py-6 lg:py-8 gap-12"
          id="projects"
        >
          <div className="order-1 lg:order-2 flex flex-1 justify-center items-center w-full lg:justify-start">
            <div className="flex flex-col w-full max-w-3xl mt-[50px] mb-[50px] md:mt-[50px] lg:mt-[80px] lg:mb-10 space-y-4">
              <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-3xl lg:text-4xl text-center lg:text-left ">
                <div className="flex justify-center lg:justify-start font-roboto">
                  <p className="mr-2">{t("my")}</p>
                  <p>Proj</p>
                  <p className="text-[#3DF58C]">&</p>
                  <p>{t("cts")}</p>
                </div>
              </h2>
              {/* <p className="text-[#E5E5DD] mt-6">
                <Trans i18nKey="project_description" t={t} />
              </p> */}
            </div>
          </div>
          {isMobile ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
            >
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <Card
                  buttonTitle={t("see_studycase")}
                  type="UX/UI"
                  intro={t("finny_intro")}
                  highlight
                  title={t("Finny Cashback Goals")}
                  previewVideo="/assets/finny_prev.webm"
                  stack="Figma"
                  onClick={() => {
                    setModalInfo({
                      images: finnyImages,
                      description: <Trans i18nKey="finny_description" t={t} />,
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
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <Card
                  type="Front-end"
                  title={t("Nearby")}
                  stack="React Native, Typescript, Expo e CSS"
                  highlight
                  intro={t("nearby_intro")}
                  previewVideo="/assets/nearby_prev.webm"
                  onClick={() => {
                    setModalInfo({
                      images: nearbyImages,
                      description: <Trans i18nKey="nearby" t={t} />,
                      tecnologies: [
                        "React Native",
                        "typescript",
                        "expo",
                        "css",
                      ],
                      links: [
                        { github: "https://github.com/7hayMuller/nlw-nearby" },
                      ],
                    });
                    setIsModalOpen(true);
                  }}
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <Card
                  type="UX/UI"
                  title={t("itau_title")}
                  buttonTitle={t("see_studycase")}
                  highlight
                  intro={t("itau_intro")}
                  stack="Figma"
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
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center px-4 py-8">
                <Card
                  type="Front-end"
                  highlight
                  intro={t("portfolio_intro")}
                  title={t("this_portfolio")}
                  stack="Next.js, Typescript e Tailwind"
                  previewVideo="/assets/portfolio.webm"
                  onClick={() => {
                    setModalInfo({
                      images: portfolioImages,
                      description: t("portfolio_description"),
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
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 md:items-start md:justify-center mb-10 gap-4">
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
                    description: <Trans i18nKey="finny_description" t={t} />,
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
                    description: <Trans i18nKey="nearby" t={t} />,
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
                type="Front-end"
                title={t("this_portfolio")}
                previewVideo="/assets/portfolio.webm"
                stack="Next.js, Typescript e Tailwind"
                intro={t("portfolio_intro")}
                onClick={() => {
                  setModalInfo({
                    images: portfolioImages,
                    description: (
                      <Trans i18nKey="portfolio_description" t={t} />
                    ),
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
          className="relative flex flex-col md:flex md:flex-col lg:flex-row md:justify-center md:items-center justify-around items-start lg:py-12 mx-auto px-8 py-6 gap-12 max-w-7xl"
        >
          <div className="text-center md:text-center lg:-mt-[200px] lg:text-left lg:text-lg max-w-3xl w-full">
            <h2 className="text-[#E5E5DD] font-bold text-3xl md:text-4xl lg:text-4xl mb-4 font-roboto">
              <span className="flex justify-center md:flex md:justify-center lg:justify-start">
                Skills
                <strong className="text-[#3DF58C] ml-1 mr-1">&</strong> Tools
              </span>
            </h2>
            <p className="text-[#E5E5DD] lg:w-[600px] text-sm md:text-lg lg:text-lg mt-[20px]">
              <Trans i18nKey="skills" t={t} />
            </p>
            <br />
            <div className="lg:w-[600px]">
              {["react", "next", "typescript", "javascript"].includes(
                activeKey
              ) ? (
                <p className="text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto drop-shadow-[0_0_5px_#ec4899]">
                  <Trans>
                    <i>`&quot;`</i>Com{" "}
                    <strong className="text-[#E5E5DD]">
                      React, Next.js e TypeScript
                    </strong>
                    , construo a estrutura e a inteligência que fazem um projeto
                    ganhar vida.<i>`&quot;`</i>
                  </Trans>
                </p>
              ) : activeKey === "figma" ? (
                <p
                  className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>`&quot;`</i>No{" "}
                    <strong className="text-[#E5E5DD]">Figma</strong>,
                    experimento, pesquiso e penso em cada interação para que
                    tudo faça sentido para quem está do outro lado da tela.
                    <i>`&quot;`</i>
                  </Trans>
                </p>
              ) : ["tailwind", "sass"]?.includes(activeKey) ? (
                <p
                  className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>`&quot;`</i>
                    <strong className="text-[#E5E5DD]">
                      Tailwind e SCSS
                    </strong>{" "}
                    entram como meus pincéis para dar cor, forma e
                    personalidade, criando interfaces que não só funcionam, mas
                    encantam.<i>`&quot;`</i>
                  </Trans>
                </p>
              ) : (
                <p
                  className={`text-[#A68CFB] text-lg md:text-2xl lg:text-2xl font-roboto drop-shadow-[0_0_5px_#ec4899]`}
                >
                  <Trans>
                    <i>`&quot;`</i>Com{" "}
                    <strong className="text-[#E5E5DD]">
                      React, Next.js e TypeScript
                    </strong>
                    , construo a estrutura e a inteligência que fazem um projeto
                    ganhar vida.<i>`&quot;`</i>
                  </Trans>
                </p>
              )}
            </div>
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
            <div className="flex flex-col max-w-3xl lg:w-[600px] w-full">
              <h2 className="flex justify-center lg:justify-start gap-2 text-[#E5E5DD] font-bold lg:text-5xl text-4xl text-center lg:text-left lg:mt-10 lg:mb-11 font-roboto">
                <span>
                  {t("contact_title")}{" "}
                  <strong className="text-[#E64765] font-roboto">
                    {t("me")}
                  </strong>
                </span>
                <Image alt="et" src={Et} width={50} height={50} />
              </h2>
              <p className="text-[#E5E5DD] text-center text-sm md:text-lg lg:text-lg lg:text-left lg:w-[600px]">
                <Trans i18nKey="contact_description" t={t} />
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
          <div className="order-3 lg:order-2 w-full lg:flex-[2] -mt-[30px] md:-mt-[80px] lg:-mt-[50px] lg:ml-[80px]">
            <ContactForm />
          </div>
        </section>
        <div className="h-[1px] w-full bg-[#3DF58C] shadow-[0_0_10px_#3DF58C]"></div>
        <div className="flex justify-center text-center mt-6">
          <p className="text-[12px] text-[#E5E5DD] opacity-50 font-roboto mb-6">
            {t("made_by_me")}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
