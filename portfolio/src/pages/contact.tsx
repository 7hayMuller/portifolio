import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/router";
import Navbar from "./components/NavBar";
import { FaBehance } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Section
        action={
          <div className="flex items-center mt-8 justify-center sm:justify-center md:justify-start lg:justify-start cursor-pointer">
            <a
              className="mr-5"
              href="https://github.com/7hayMuller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                fontSize={25}
                className="text-[#e2e8c0] hover:text-[#be1d90] cursor-pointer"
              />
            </a>
            <a
              className="mr-5"
              href="https://www.linkedin.com/in/thaynamuller/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                fontSize={25}
                className="text-[#e2e8c0] hover:text-[#be1d90] cursor-pointer"
              />
            </a>
            <a
              href="https://www.behance.net/thaynamuller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance
                fontSize={25}
                className="text-[#e2e8c0] hover:text-[#be1d90] cursor-pointer"
              />
            </a>
          </div>
        }
        reverse
        id="section4"
        content={
          <>
            <div className="relative mt-10 lg:text-start text-center">
              <h1 className="inline-block text-[#e2e8c0] text-[36px] sm:text-[48px] lg:text-[50px] font-bold lg:mb-[60px]">
                {t("contact_title")}{" "}
                <strong className="text-[#be1d90]">{t("me")}</strong> 💻
              </h1>
            </div>
            <p>{t("contact_description")}</p>
          </>
        }
        hasForm={
          <div className="order-3 lg:order-2 w-full lg:w-1/2">
            <ContactForm
              onClose={() => {
                router.push("/about");
              }}
            />
          </div>
        }
      />
      <div className="absolute bottom-0 left-1/2">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          {t("made_by_me")} 🩷
        </p>
      </div>
    </>
  );
};

export default Contact;
