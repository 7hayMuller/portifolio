import Image, { StaticImageData } from "next/image";
import styles from "../../styles/image.module.css";
import ContactForm from "./ContactForm";

interface SectionProps {
  action?: React.ReactNode;
  id: string;
  imgClassName?: string;
  animationClassName?: string;
  title: string;
  hasAnimation?: boolean;
  hasForm?: boolean;
  content: string;
  imageSrc?: StaticImageData;
  animation?: React.ReactNode;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  action,
  id,
  imgClassName,
  animationClassName,
  animation,
  title,
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
      }  relative h-[600px]`}
    >
      {imageSrc ? (
        <>
          <div
            className={`${styles.imageContainer} ${
              reverse ? "lg:order-2" : "lg:order-1"
            } ${imgClassName}`}
          >
            <Image src={imageSrc} alt="side-image" />
          </div>
        </>
      ) : animation ? (
        <div className={animationClassName}>{animation}</div>
      ) : (
        hasForm && <ContactForm />
      )}
      <div
        className={`flex flex-1 justify-end items-center p-6 ${
          reverse ? "lg:pr-6" : "lg:pl-[30px]"
        }`}
      >
        <div className="w-full lg:w-[500px] flex flex-col items-start">
          <h1 className="text-[#e2e8c0] font-bold text-3xl mb-4">{title}</h1>
          <p className="text-[#e2e8c0]">{content}</p>
          {action && action}
        </div>
      </div>
    </div>
  );
};

export default Section;
