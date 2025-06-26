import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/navbar.module.css";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    if (path === "/about") {
      setActiveSection("introduction");
    } else if (path === "/projects") {
      setActiveSection("projects");
    } else if (path === "/contact") {
      setActiveSection("contact");
    }
  }, [router.pathname]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <Link
            href={"/about"}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base lg:text-base text-[#e2e8c0] ${
              activeSection === "introduction"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block"
                : ""
            }`}
          >
            Me, Myself & I
          </Link>
        </li>
        <li className="pb-3 pt-3 md:pr-6">
          <Link
            href={"/projects"}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base lg:text-base text-[#e2e8c0] ${
              activeSection === "projects"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block"
                : ""
            }`}
          >
            {t("my_projects")}
          </Link>
        </li>
        <li className="pb-3 pt-3">
          <Link
            href={"/contact"}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base lg:text-base text-[#e2e8c0] ${
              activeSection === "contact"
                ? "border-b-4 border-[#F25D76] pb-1 inline-block"
                : ""
            }`}
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
