"use client";

import Image, { StaticImageData } from "next/image";
import styles from "../../styles/image.module.css";
import ContactForm from "./ContactForm";

interface SectionProps {
  action?: React.ReactNode;
  id: string;
  imgClassName?: string;
  animationClassName?: string;
  title?: React.ReactNode;
  hasAnimation?: boolean;
  hasForm?: React.ReactNode;
  content: React.ReactNode | string;
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
      className={`relative flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } h-auto lg:h-[600px] px-4 py-6 lg:py-12 lg:px-8`}
    >
      {imageSrc && (
        <div
          className={`order-1 lg:order-1 flex justify-center items-center w-full lg:w-1/2 ${
            reverse ? "lg:order-2" : "lg:order-1"
          } ${imgClassName}`}
        >
          <Image src={imageSrc} alt="side-image" layout="responsive" />
        </div>
      )}
      {animation && !imageSrc && (
        <div className={`order-1 lg:order-2 ${animationClassName}`}>
          {animation}
        </div>
      )}

      <div
        className={`order-1 lg:order-3 flex flex-1 justify-center lg:justify-end items-center w-full lg:w-1/2 ${
          reverse ? "lg:pr-6" : "lg:pl-6"
        }`}
      >
        <div className="w-full max-w-lg mt-5 lg:mt-0">
          <h1 className="text-[#e2e8c0] font-bold text-3xl mb-4 text-center lg:text-left">
            {title}
          </h1>
          <p className="text-[#e2e8c0] text-center lg:text-left">{content}</p>
          {action && <div className="text-center lg:text-right">{action}</div>}
        </div>
      </div>
      {!imageSrc && !animation && hasForm}
    </div>
  );
};

export default Section;
