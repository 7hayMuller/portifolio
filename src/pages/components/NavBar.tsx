import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import { useTranslation } from "react-i18next";
import ClientOnly from "./ClientOnly";
import { t } from "i18next";

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
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = ["introduction", "projects", "skills", "contact"];
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
        }
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
          <button onClick={handleToggleMobileMenu} className="text-[#e2e8c0]">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`fixed top-0 left-0 w-full ${
            isMobileMenuOpen ? "h-full" : "h-0"
          } bg-opacity-90 flex flex-col items-center justify-center transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-300 md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-center md:translate-x-0`}
          style={{
            backgroundColor: isMobileMenuOpen
              ? "rgba(0, 0, 0, 0.3)"
              : "transparent",
          }}
        >
          {[
            { id: "introduction", label: t("about") },
            { id: "projects", label: t("my_projects") },
            { id: "skills", label: t("skills_and_tools") },
            { id: "contact", label: t("contact") },
          ].map(({ id, label }) => (
            <li key={id} className="pb-3 pt-3 md:pr-6">
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
        onClick={() =>
          i18n.changeLanguage(i18n?.language === "en" ? "pt" : "en")
        }
        data-text={i18n?.language === "en" ? "PT" : "EN"}
        suppressHydrationWarning
      >
        {i18n?.language?.toUpperCase()}
      </button>
    </nav>
  );
};

export default Navbar;
