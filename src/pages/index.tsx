"use client";

import Navbar from "./components/NavBar";
import Section from "./components/Section";
import { useRouter } from "next/router";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/me2.png";
import { useEffect, useState } from "react";

import styles from "../styles/effect.module.css";
import Sphere from "../../public/assets/uxImage.png";
import { Trans, useTranslation } from "react-i18next";
import Loading from "./components/Loading";
import Head from "next/head";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6";
import ContactForm from "./components/ContactForm";
import Card from "./components/Card";

import Image from "next/image";

const About = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [exploded, setExploded] = useState<boolean>(false);

  useEffect(() => {
    if (exploded) {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter: any) => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotate = (Math.random() - 0.5) * 720;
        letter.style.setProperty("--random-x", `${randomX}px`);
        letter.style.setProperty("--random-y", `${randomY}px`);
        letter.style.setProperty("--random-rotate", `${randomRotate}deg`);
      });
    }
  }, [exploded]);

  const handleClick = (route: string) => {
    setExploded(true);
    setTimeout(() => {
      router.push(route);
    }, 800);
  };

  return (
    <>
      <Head>
        <title>Thayná Müller | Dev | UX / UI</title>
      </Head>
      <Loading />
      <Navbar />
      <div className="bg-[#2A235C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div
            className={`relative flex flex-col  lg:flex-row-reverse h-auto lg:h-[600px] px-4 py-6 lg:py-12 lg:px-8`}
          >
            <div
              className={`order-1 flex justify-center items-center w-full lg:w-1/2 lg:order-2  relative`}
            >
              <Image src={Me} alt="side-image" className="w-full h-auto" />
            </div>

            <div
              className={`order-1 lg:order-3 flex flex-1 justify-center lg:justify-end items-center w-full lg:w-1/2 "lg:pr-6"`}
            >
              <div className="w-full max-w-lg mt-5 lg:mt-0">
                <h2 className="text-[#e2e8c0] font-bold text-3xl mb-4 text-center lg:text-left">
                  <p className="flex justify-center lg:justify-start">
                    Me, Myself{" "}
                    <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> I
                  </p>
                </h2>
                <div className="text-[#e2e8c0] text-center lg:text-left">
                  {" "}
                  <p>
                    <Trans i18nKey="introduction.greeting" t={t}>
                      Hello! I&apos;m Thayná Müller, a UX/UI designer and
                      frontend developer from <strong>Brazil</strong>, currently
                      living in the beautiful state of Rio de Janeiro.
                    </Trans>
                  </p>
                  <br />
                  <p>
                    <Trans i18nKey="introduction.hobbies" t={t}>
                      When I&apos;m not designing or coding, I love traveling
                      and exploring new cultures, which inspires my{" "}
                      <strong>creative</strong> process and broadens my{" "}
                      <strong>perspective</strong>.
                    </Trans>
                  </p>
                  <br />
                  <p>
                    <Trans i18nKey="introduction.welcome" t={t}>
                      Welcome to my portfolio, where you can see some of the
                      projects I&apos;ve worked on. Let&apos;s connect and
                      create something <strong>amazing</strong> together!
                    </Trans>
                  </p>
                  <div
                    className="relative flex justify-center md:justify-start py-6"
                    style={{ filter: "url(#goo)" }}
                  >
                    <div
                      className="relative flex justify-center py-6"
                      style={{ filter: "url(#goo)" }}
                    >
                      <button
                        type="submit"
                        className="relative inline-block text-center bg-[#F25D76] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
                           before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#F25D76] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
                           after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#F25D76] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100"
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
        </div>
      </div>

      <div className="relative z-0 -mt-[150px]">
        <Image
          src="/assets/separator.png"
          alt="Divisão em forma de onda"
          width={1920}
          height={150}
          className="w-full object-cover"
        />
      </div>
      <div className="bg-[#181629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-start justify-center gap-4">
            <Card
              type={t("Frontend")}
              title={t("Frontend projects")}
              stack="ReactJs, Sass, Figma"
              highlight
            />
            <Card
              type={t("UX/UI")}
              title={t("Frontend projects")}
              stack="ReactJs, Sass, Figma"
            />
            <Card
              type={t("Frontend")}
              title={t("Frontend projects")}
              stack="ReactJs, Sass, Figma"
            />
            <Card
              type={t("Frontend")}
              title={t("Frontend projects")}
              stack="ReactJs, Sass, Figma"
            />
          </div>
          <div className="flex justify-end items-center -mt-[100px]">
            <div>
              <h2 className="text-[#e2e8c0] font-bold text-3xl mb-4 text-center lg:text-left">
                <p className="flex justify-center lg:justify-start">
                  Skills
                  <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> Tools
                </p>
              </h2>
              <p className="text-[#e2e8c0] text-center lg:text-left">
                <Trans i18nKey="introduction.hobbies" t={t}>
                  When I&apos;m not designing or coding, I love traveling and
                  exploring new cultures, which inspires my{" "}
                  <strong>creative</strong> process and broadens my{" "}
                  <strong>perspective</strong>.
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
                  href="https://www.behance.net/thaynamuller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance
                    fontSize={25}
                    className="text-[#e2e8c0] hover:text-[#F25D76] cursor-pointer"
                  />
                </a>
              </div>
            }
            reverse
            id="section4"
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
        </div>

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
