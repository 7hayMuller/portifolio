"use client";

import Navbar from "./components/NavBar";
import Section from "./components/Section";
import { useRouter } from "next/router";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/me.png";
import { useEffect, useState } from "react";

import styles from "../styles/effect.module.css";
import Sphere from "../../public/assets/uxImage.png";


const About = () => {
  const router = useRouter();

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
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">        
          <Section
            id="section1"
            title={
              <p className="flex justify-center lg:justify-start">
                Me, Myself{" "}
                <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong> I
              </p>
            }
            content={
              <>
                <p>
                  Hello! I&apos;m Thayná Müller, a 27-year-old UX/UI designer
                  and frontend developer from <strong>Brazil</strong>, currently
                  living in the beautiful state of Rio de Janeiro.
                </p>
                <br />

                <p>
                  When I&apos;m not designing or coding, I love traveling and
                  exploring new cultures, which inspires my{" "}
                  <strong>creative</strong> process and broadens my{" "}
                  <strong>perspective.</strong>
                </p>
                <br />

                <p>
                  <strong>Welcome</strong> to my portfolio, where you can see
                  some of the projects I&apos;ve worked on. Let&apos;s connect
                  and create something <strong>amazing</strong> together!
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
                  className="relative inline-block text-center bg-[#be1d90] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
              before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#be1d90] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
              after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#be1d90] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100"
                  onClick={() => router.push('/contact')}
                >
                  Let&apos;s chat
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
                {"See more".split("").map((char, index) => (
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
          id="section2"
          title="Frontend Projects"
          content="Discover the projects I've developed, highlighting my expertise in frontend development. See how I build responsive, efficient, and visually appealing web applications using modern technologies and industry best practices."
          animationClassName="lg:absolute lg:left-[60px] lg:-top-[20px]"
          animation={<Carousel />}
          reverse
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
                {"See more".split("").map((char, index) => (
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
          reverse
          id="section3"
          title="UX/UI Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in UX/UI design. Explore how I create intuitive, responsive, and visually appealing user experiences."
          imageSrc={Sphere}
        />
      </div>
      <div className="flex justify-center mt-10">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          Made by me with 🩷
        </p>
      </div>
    </>
  );
};

export default About;
