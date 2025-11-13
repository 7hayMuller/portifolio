import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ClientOnly from "./ClientOnly";
import { t } from "i18next";

import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  useEffect(() => {
    const sections = [
      "introduction",
      "projects",
      "skills",
      "timeline",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className={`${styles.navbar} w-full flex items-center relative`}>
      <div className="flex flex-grow justify-center md:justify-center">
        <div className="md:hidden z-50 absolute left-4 top-4">
          <button onClick={handleToggleMobileMenu} className="text-[#E5E5DD]">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`absolute top-0 left-0 w-full z-40 bg-[#05020a] bg-opacity-90 text-[#E5E5DD] transition-all duration-300 ease-in-out
    flex-col items-center
    md:static md:flex-row md:flex md:bg-transparent md:py-0 ${
      isMobileMenuOpen ? "flex py-4" : "hidden"
    }`}
        >
          {[
            { id: "introduction", label: t("about") },
            { id: "projects", label: t("my_projects") },
            { id: "skills", label: t("skills_and_tools") },
            { id: "timeline", label: t("timeline") },
            { id: "contact", label: t("contact") },
          ].map(({ id, label }) => (
            <li key={id} className="py-2 md:pr-6">
              <button
                onClick={() => handleLinkClick(id)}
                className={`text-base lg:text-base ${
                  activeSection === id
                    ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                    : ""
                }`}
                data-text={label}
              >
                <ClientOnly>{label}</ClientOnly>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        aria-label="Alternar idioma"
        className="flex items-center absolute right-4  md:static md:mr-0 z-40"
        onClick={() => {
          i18n.changeLanguage(i18n?.language === "en" ? "pt" : "en");
        }}
        data-text={i18n?.language === "en" ? "PT" : "EN"}
        suppressHydrationWarning
      >
        {i18n?.language?.toUpperCase()}
      </button>
    </nav>
  );
};

export default Navbar;
