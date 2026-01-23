"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18n from "../locales";
import ClientOnly from "./ClientOnly";
import styles from "../styles/navbar.module.css";

type NavItem = {
  id: string;
  label: string;
  type: "section" | "route";
};

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { id: "introduction", label: t("about"), type: "section" },
    { id: "projects", label: t("projects"), type: "section" },
    { id: "skills", label: t("skills_and_tools"), type: "section" },
    { id: "contact", label: t("contact"), type: "section" },
    { id: "/blog", label: t("blog"), type: "route" },
  ];

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);

    if (item.type === "route") {
      setActiveId("/blog");
      router.push("/blog");
      return;
    }

    setActiveId(item.id);

    if (pathname === "/") {
      router.push(`/#${item.id}`, { scroll: false });

      const section = document.getElementById(item.id);
      section?.scrollIntoView({ behavior: "smooth", block: "center" });

      return;
    }

    router.push(`/#${item.id}`);
  };
  useEffect(() => {
    if (pathname !== "/") return;

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        setActiveId("introduction");
        return;
      }

      setActiveId(hash);

      const section = document.getElementById(hash);
      section?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    syncFromHash();

    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/blog") {
      setActiveId("/blog");
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["introduction", "projects", "skills", "contact"];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);

            window.history.replaceState(null, "", `/#${id}`);
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

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isHomeSectionActive = (item: NavItem) => {
    return pathname === "/" && item.type === "section" && activeId === item.id;
  };

  const isBlogActive = (item: NavItem) => {
    return pathname === "/blog/" && item.type === "route";
  };

  return (
    <nav className={`${styles.navbar} w-full flex items-center relative`}>
      <div className="flex flex-grow justify-center">
        <div className="md:hidden absolute left-4 top-4 z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`absolute top-0 left-0 w-full z-40 bg-[#05020a] bg-opacity-90
          flex-col items-center transition-all duration-300
          md:static md:flex md:flex-row md:bg-transparent
          ${isMobileMenuOpen ? "flex py-4" : "hidden"}`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="py-2 md:pr-6">
              <button
                onClick={() => handleNavClick(item)}
                className={`text-base lg:text-base ${
                  isHomeSectionActive(item) || isBlogActive(item)
                    ? "border-b-4 border-[#F25D76] pb-1 inline-block font-bold"
                    : ""
                }`}
              >
                <ClientOnly>{item.label}</ClientOnly>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        aria-label="Alternar idioma"
        className="absolute right-4 md:static"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")
        }
      >
        {i18n.language?.toUpperCase().split("-")[0]}
      </button>
    </nav>
  );
};

export default Navbar;
