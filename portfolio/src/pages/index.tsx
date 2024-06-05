"use client";

import { useEffect, useState } from "react";
import TypeIt from "typeit-react";

import { useRouter } from "next/navigation";

import styles from "../styles/effect.module.css";
import SineWave from "./components/SineWave";

const Main = () => {
  const router = useRouter();

  const [exploded, setExploded] = useState(false);

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

  const handleClick = () => {
    setExploded(true);

    setTimeout(() => {
      router.push("/about");
    }, 800);
  };

  return (
    <>
      <div
        className={`absolute right-[30px] top-[10px] text-[#fff] font-bold font-sans cursor-pointer  text-[20px] border-s border-e border-t border-b pl-3 pr-3 border-purple
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
      <div className="absolute bottom-[100px] w-full flex flex-col items-center">
        <div className="flex justify-between">
          <div className="text-[35px] text-[#e2e8c0] mr-[10px]">
            <TypeIt
              options={{
                startDelay: 2000,
                strings: ["Hi, I'm Thayná Müller."],
                speed: 100,
                waitUntilVisible: true,
                cursor: false,
              }}
            />
          </div>
          <div className="text-[35px] text-[#e2e8c0] font-bold">
            <TypeIt
              options={{ startDelay: 5500 }}
              getBeforeInit={(instance: any) => {
                instance
                  .type("A Frontend developer!")
                  .pause(750)
                  .delete(21)
                  .type("A UX/UI Designer!")
                  .pause(750)
                  .delete(19);

                instance.options({ loop: true, speed: 100 });

                return instance;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
