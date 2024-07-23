import UxUiImage from "../../public/assets/uxImage.png";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import { useRouter } from "next/router";
import Carousel from "./components/Carousel";
import Me from "../../public/assets/me.png";
import { useEffect, useState } from "react";

import styles from "../styles/effect.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FloatingSpheres from "./components/FloatingSpheres";

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
          content={
            <>
              <p>
                Hello! I&apos;m Thayná Müller, a 27-year-old UX/UI designer and
                frontend developer from Brazil, currently living in the
                beautiful state of Rio de Janeiro. I have a passion for creating
                intuitive, responsive, and visually appealing digital
                experiences. When I&apos;m not designing or coding, I love
                traveling and exploring new cultures, which inspires my creative
                process and broadens my perspective.
              </p>
              <br />

              <p>
                Welcome to my portfolio, where you can see some of the projects
                I&apos;ve worked on. Let&apos;s connect and create something
                amazing together!
              </p>
            </>
          }
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
          content="Here are some of the projects I've worked on, showcasing my skills in  UX/UI design. Explore how I create intuitive, responsive, and visually appealing user experiences."
          animationClassName="mt-[50px]"
          animation={
            <div className="h-[500px] w-[600px]">
              <FloatingSpheres />
            </div>
          }
        />
        <div className="relative mt-10">
          <h1 className="absolute inset-0 m-auto text-[#e2e8c0] text-[62px] font-bold text-center">
            Contact <strong className="text-[#be1d90]">me</strong> 💻
          </h1>
        </div>
        <Section
          action={
            <div className="flex items-center mt-8 cursor-pointer">
              <a
                href="https://github.com/7hayMuller"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  fontSize={25}
                  className="mr-5 text-[#e2e8c0] hover:text-[#be1d90] cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/thaynamuller/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  fontSize={25}
                  className="text-[#e2e8c0] hover:text-[#be1d90] cursor-pointer"
                />
              </a>
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
