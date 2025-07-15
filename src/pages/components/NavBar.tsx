import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/navbar.module.css";
import { useTranslation } from "react-i18next";
import ClientOnly from "./ClientOnly";
import { t } from "i18next";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        } transition-all duration-300 md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-center md:translate-x-0`}
        style={{
          backgroundColor: isMobileMenuOpen
            ? "rgba(0, 0, 0, 0.3)"
            : "transparent",
        }}
      >
        <li className="pb-3 pt-3 md:pr-6">
          <button
            data-text="Me, Myself & I"
            onClick={() => handleLinkClick("introduction")}
            className={`text-base lg:text-base ${
              activeSection === "introduction"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                : ""
            }`}
          >
            Me, Myself & I
          </button>
        </li>
        <li className="pb-3 pt-3 md:pr-6">
          <button
            onClick={() => handleLinkClick("projects")}
            className={`text-base lg:text-base ${
              activeSection === "projects"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                : ""
            }`}
            suppressHydrationWarning
            data-text={t("my_projects")}
            ref={(el) => {
              if (el && typeof window !== "undefined") {
                el.setAttribute("data-text", t("my_projects"));
              }
            }}
          >
            <ClientOnly>{t("my_projects")}</ClientOnly>
          </button>
        </li>

        <li className="pb-3 pt-3 md:pr-6">
          <button
            onClick={() => handleLinkClick("skills")}
            className={`text-base lg:text-base ${
              activeSection === "skills"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                : ""
            }`}
            suppressHydrationWarning
            data-text={t("skills_and_tools")}
            ref={(el) => {
              if (el && typeof window !== "undefined") {
                el.setAttribute("data-text", t("skills_and_tools"));
              }
            }}
          >
            <ClientOnly>{t("skills_and_tools")}</ClientOnly>
          </button>
        </li>
        <li className="pb-3 pt-3">
          <button
            onClick={() => handleLinkClick("contact")}
            className={`text-base lg:text-base ${
              activeSection === "contact"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                : ""
            }`}
            suppressHydrationWarning
            data-text={t("contact")}
            ref={(el) => {
              if (el && typeof window !== "undefined") {
                el.setAttribute("data-text", t("contact"));
              }
            }}
          >
            <ClientOnly>{t("contact")}</ClientOnly>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
