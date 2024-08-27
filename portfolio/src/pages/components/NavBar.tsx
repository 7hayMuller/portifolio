import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/navbar.module.css";

type Props = {
  extern?: boolean;
  section?: string;
};

const Navbar: React.FC<Props> = ({ extern, section = "section1" }) => {
  const [activeSection, setActiveSection] = useState<string>(section);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <nav
      className={`${styles.navbar} ${
        isMobileMenuOpen && "h-[200px]"
      } w-full flex justify-between md:justify-center items-center`}
    >
      <div className="md:hidden z-50">
        <button onClick={handleToggleMobileMenu} className="text-[#e2e8c0]">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul
        className={`fixed top-0 left-0 w-full ${
          isMobileMenuOpen ? "h-full" : "h-0"
        } bg-opacity-90 flex flex-col items-center justify-center transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-center md:translate-x-0 overflow-hidden`}
        style={{
          backgroundColor: isMobileMenuOpen
            ? "rgba(0, 0, 0, 0.3)"
            : "transparent",
        }}
      >
        <li
          className={`pb-3 pt-3 ${
            activeSection === "section1" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/about#section1" : "#section1"}
            onClick={() => {
              setActiveSection("section1");
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="text-base lg:text-base text-[#e2e8c0]">
              Me, Myself & I
            </span>
          </Link>
        </li>
        <li
          className={`pb-3 pt-3 ${
            activeSection === "section2" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/frontend-projects" : "#section2"}
            onClick={() => {
              setActiveSection("section2");
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="text-base lg:text-base text-[#e2e8c0]">
              Frontend Projects
            </span>
          </Link>
        </li>
        <li
          className={`pb-3 pt-3 ${
            activeSection === "section3" ? "border-b-4 border-[#be1d90]" : ""
          }`}
        >
          <Link
            href={extern ? "/uxui-projects" : "#section3"}
            onClick={() => {
              setActiveSection("section3");
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="text-base lg:text-base text-[#e2e8c0]">
              UX/UI Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
