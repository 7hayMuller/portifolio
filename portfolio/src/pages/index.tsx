"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/effect.module.css";
import SineWave from "./components/SineWave";

const Main = () => {
  const router = useRouter();
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    if (exploded) {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter) => {
        const element = letter as HTMLElement;
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotate = (Math.random() - 0.5) * 720;
        element.style.setProperty("--random-x", `${randomX}px`);
        element.style.setProperty("--random-y", `${randomY}px`);
        element.style.setProperty("--random-rotate", `${randomRotate}deg`);
      });
    }
  }, [exploded]);

  const handleClick = () => {
    setExploded(true);
    setTimeout(() => {
      router.push("/about");
    }, 800);
  };

  useEffect(() => {
    const words = document.querySelectorAll(".word");
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
    <div className="relative flex flex-col items-center lg:w-full w-[500px] h-full">
      <div
        className={`absolute top-2 lg:top-2 right-3 lg:right-8 text-[#fff] font-bold font-sans cursor-pointer text-[20px] border border-purple w-[100px] lg:h-[40px] h-[50px] flex items-center justify-center overflow-hidden
    ${exploded ? styles.exploded : ""}`}
        onClick={handleClick}
      >
        {"About".split("").map((char, index) => (
          <span
            key={index}
            className={`${styles.letter} ${exploded ? styles.exploded : ""}`}
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
        <div className="flex justify-center">
          <div className={`rotating-text ${styles.rotatingText} text-center`}>
            <p className="text-[20px] text-[#e2e8c0]">
              Hi, I&apos;m Thayná Müller.
            </p>
            <p>
              <span className="word text-[20px] text-[#8e44ad] font-bold cursor-pointer">
                A Frontend developer.
              </span>
              <span className="word text-[20px] text-[#f1c40f] font-bold cursor-pointer">
                A UX/UI designer.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
