"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/effect.module.css";
import dynamic from "next/dynamic";
import { t } from "i18next";
import Head from "next/head";

const SineWave = dynamic(() => import("./components/SineWave"), { ssr: false });

const Main = () => {
  const router = useRouter();
  const [exploded, setExploded] = useState(false);

  const handleClick = () => {
    setExploded(true);
    setTimeout(() => {
      router.push("/about");
    }, 800);
  };

  useEffect(() => {
    if (exploded) {
      const letters = Array.from(
        document.querySelectorAll(`.${styles.letter}`)
      );
      letters.forEach((letter, index) => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotate = (Math.random() - 0.5) * 720;
        letter.setAttribute(
          "style",
          `
          --random-x: ${randomX}px;
          --random-y: ${randomY}px;
          --random-rotate: ${randomRotate}deg;
        `
        );
      });
    }
  }, [exploded]);

  useEffect(() => {
    const words = Array.from(document.querySelectorAll(".word"));
    words.forEach((word) => {
      const letters =
        word.textContent
          ?.split("")
          .map((letter) => (letter === " " ? "\u00A0" : letter)) || [];
      word.textContent = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    const rotateText = () => {
      const currentWord = words[currentWordIndex];
      const nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).className = "letter out";
        }, i * 80);
      });

      Array.from(nextWord.children).forEach((letter, i) => {
        (letter as HTMLElement).className = "letter behind";
        setTimeout(() => {
          (letter as HTMLElement).className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const intervalId = setInterval(rotateText, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Thayná Müller</title>
      </Head>
      <div className="relative flex flex-col items-center lg:w-full w-[700px] h-full">
        <div
          className={`absolute top-[50px] lg:top-2 right-[20px] lg:right-8 text-[#fff] font-bold font-sans cursor-pointer text-[20px] border border-purple w-[100px] lg:h-[40px] h-[50px] flex items-center justify-center overflow-hidden ${
            exploded ? styles.exploded : ""
          }`}
          onClick={handleClick}
        >
          {t("about")
            .split("")
            .map((char, index) => (
              <span
                key={index}
                className={`${styles.letter} ${
                  exploded ? styles.exploded : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
        </div>
        <SineWave />
        <div
          className={`lg:mb-0 mb-[100px] w-full flex flex-col items-center ${styles.bottomText}`}
        >
          <div className="flex justify-center ">
            <div className={`rotating-text ${styles.rotatingText} text-center`}>
              <p className="text-[20px] text-[#e2e8c0]">{t("hi_im")}</p>
              <p className="w-[100px] lg:w-full">
                <span className="word text-[20px] text-[#8e44ad] font-bold cursor-pointer">
                  {t("frontend_developer")}
                </span>
                <span className="word text-[20px] text-[#f1c40f] font-bold cursor-pointer">
                  {t("designer")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
