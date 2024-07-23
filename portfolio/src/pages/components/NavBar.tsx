import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import { useEffect, useState } from "react";

type Props = {
  extern?: boolean;
  section?: string;
};

const Navbar: React.FC<Props> = ({ extern, section = "section1" }) => {
  const [activeSection, setActiveSection] = useState<string>(section);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = activeSection;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || activeSection;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li
          className={`pb-2 ${
            activeSection === "section1" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/about#section1" : "#section1"}
            onClick={() => setActiveSection("section1")}
          >
            Me, Myself & I
          </Link>
        </li>
        <li
          className={`pb-2 ${
            activeSection === "section2" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/frontend-projects" : "#section2"}
            onClick={() => setActiveSection("section2")}
          >
            Frontend Projects
          </Link>
        </li>
        <li
          className={`pb-2 ${
            activeSection === "section3" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/uxui-projects" : "#section3"}
            onClick={() => setActiveSection("section3")}
          >
            UX/UI Projects
          </Link>
        </li>
        <li
          className={`pb-2 ${
            activeSection === "section4" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/about/#section4" : "#section4"}
            onClick={() => setActiveSection("section4")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
