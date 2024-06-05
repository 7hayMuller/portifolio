import Image, { StaticImageData } from "next/image";
import styles from "../../styles/image.module.css";
import ContactForm from "./ContactForm";

interface SectionProps {
  id: string;
  imgClassName?: string;
  title: string;
  hasAnimation?: boolean;
  hasForm?: boolean;
  content: string;
  imageSrc?: StaticImageData;
  animation?: React.ReactNode;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  imgClassName,
  animation,
  title,
  hasAnimation,
  hasForm,
  content,
  imageSrc,
  reverse = false,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } min-h-screen`}
    >
      {imageSrc ? (
        <div
          className={`${styles.imageContainer} ${
            reverse ? "lg:order-2" : "lg:order-1"
          } ${imgClassName}`}
        >
          <Image
            src={imageSrc}
            alt="side-image"
            className={hasAnimation ? styles.organicShape : ""}
          />
        </div>
      ) : animation ? (
        <div>{animation}</div>
      ) : (
        hasForm && <ContactForm />
      )}
      <div
        className={`flex flex-1 justify-center items-center p-6 ${
          reverse ? "lg:pr-6" : "lg:pl-6"
        }`}
      >
        <div className="w-full lg:w-[500px] flex flex-col items-start">
          <h1 className="text-[#e2e8c0] font-bold text-3xl mb-4">{title}</h1>
          <p className="text-[#e2e8c0]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
