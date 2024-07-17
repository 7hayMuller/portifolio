import UxUiImage from "../../public/assets/uxImage.png";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import { useRouter } from "next/router";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/me.png";
import { useEffect, useState } from "react";

import styles from "../styles/effect.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
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

  const handleClick = (route: string) => {
    setExploded(true);

    setTimeout(() => {
      router.push(route);
    }, 800);
  };

  return (
    <>
      <Navbar />

      <div className="relative z-10 pt-16">
        <Section
          id="section1"
          title={
            <p className="flex">
              Me, Myself <strong className="text-[#6ad5cb] ml-1 mr-1">&</strong>{" "}
              I
            </p>
          }
          content="I'm a frontend developer based in Brazil, Rio de Janeiro with 3+ years of experience in development of interfaces, bug resolution, and more..."
          imageSrc={Me}
        />
        <Section
          action={
            <div
              className={`flex justify-end items-center mt-8 cursor-pointer ${
                exploded ? styles.exploded : ""
              }`}
              onClick={() => handleClick("/frontend-projects")}
            >
              <p className="text-[18px] text-[#6ad5cb] hover:text-[#be1d90] font-bold">
                {"Ver mais".split("").map((char, index) => (
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
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          animationClassName="absolute left-[60px] top-[200px]"
          animation={<Carousel />}
          reverse
        />
        <Section
          action={
            <div className="flex justify-end items-center mt-8 cursor-pointer">
              <p
                className="text-[18px] text-[#6ad5cb] hover:text-[#be1d90] font-bold"
                onClick={() => handleClick("/uxui-projects")}
              >
                {"Ver mais".split("").map((char, index) => (
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
          title="UX/UI Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          imageSrc={UxUiImage}
          imgClassName="mt-[30px]"
        />
        <div className="relative mt-10">
          <h1 className="absolute inset-0 m-auto text-[#e2e8c0] text-[62px] font-bold text-center">
            Contact <strong className="text-[#be1d90] underline">me</strong> 💻
          </h1>
        </div>
        <Section
          action={
            <div className="flex items-center mt-8 cursor-pointer">
              <FaGithub
                fontSize={25}
                className="mr-5 text-[#e2e8c0] hover:text-[#be1d90]"
              />
              <FaLinkedin
                fontSize={25}
                className="text-[#e2e8c0] hover:text-[#be1d90]"
              />
            </div>
          }
          id="section4"
          content="Feel free to reach out to me for any project collaborations or inquiries. Let's build something amazing together!"
          hasForm
        />
      </div>
      <div className="flex justify-center">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          Made by me with 🩷
        </p>
      </div>
    </>
  );
};

export default About;
