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
      <Loading />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <Section
          id="section1"
          title={
            <p className="flex justify-center lg:justify-start">
              Me, Myself <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong>{" "}
              I
            </p>
          }
          content={
            <>
              <p>
                <Trans i18nKey="introduction.greeting" t={t}>
                  Hello! I&apos;m Thayná Müller, a UX/UI designer and frontend
                  developer from <strong>Brazil</strong>, currently living in
                  the beautiful state of Rio de Janeiro.
                </Trans>
              </p>
              <br />
              <p>
                <Trans i18nKey="introduction.hobbies" t={t}>
                  When I&apos;m not designing or coding, I love traveling and
                  exploring new cultures, which inspires my{" "}
                  <strong>creative</strong> process and broadens my{" "}
                  <strong>perspective</strong>.
                </Trans>
              </p>
              <br />
              <p>
                <Trans i18nKey="introduction.welcome" t={t}>
                  Welcome to my portfolio, where you can see some of the
                  projects I&apos;ve worked on. Let&apos;s connect and create
                  something <strong>amazing</strong> together!
                </Trans>
              </p>
            </>
          }
          reverse
          imageSrc={Me}
          action={
            <div
              className="relative flex justify-center md:justify-start py-6"
              style={{ filter: "url(#goo)" }}
            >
              <button
                className="relative inline-block text-center bg-[#be1d90] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline"
                onClick={() => router.push("/contact")}
              >
                {t("say_hi")}
              </button>
            </div>
          }
        />
        <Section
          id="section2"
          title={t("frontend")}
          content={t("frontend_projects")}
          animation={<Carousel />}
          action={
            <div
              className={`flex justify-center lg:justify-end items-center mt-8 cursor-pointer ${
                exploded ? styles.exploded : ""
              }`}
              onClick={() => handleClick("/projects")}
            >
              <p className="text-[18px] text-[#6ad5cb] hover:text-[#be1d90] font-bold">
                {t("see_more")
                  .split("")
                  .map((char, index) => (
                    <span
                      key={index}
                      className={`${styles.letter} ${
                        exploded ? styles.exploded : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
              </p>
            </div>
          }
        />
        <Section
          action={
            <div
              className={`flex justify-center lg:justify-end items-center mt-8 cursor-pointer ${
                exploded ? styles.exploded : ""
              }`}
              onClick={() => handleClick("/projects")}
            >
              <p className="text-[18px] text-[#6ad5cb] hover:text-[#be1d90] font-bold">
                {t("see_more")
                  .split("")
                  .map((char, index) => (
                    <span
                      key={index}
                      className={`${styles.letter} ${
                        exploded ? styles.exploded : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
              </p>
            </div>
          }
          id="section3"
          title={t("uxui")}
          content={t("uxui_projects")}
          imageSrc={Sphere}
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

export default About;
