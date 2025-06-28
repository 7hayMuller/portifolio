import { t } from "i18next";
import Image from "next/image";

type CardProps = {
  type: string;
  title: string;
  stack: string;
  highlight?: boolean;
  onClick?: () => void;
  buttonTitle?: string;
};

const Card: React.FC<CardProps> = ({
  buttonTitle = t("Ver mais"),
  type,
  title,
  stack,
  highlight,
  onClick,
}) => {
  return (
    <div className="bg-[#101524]/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg w-full max-w-sm">
      {highlight && (
        <div className="w-full h-20">
          <Image
            src="/assets/highlight_waves.png"
            alt="Decoração orgânica"
            fill
            className="object-cover mt-[-100px]"
            priority
          />
        </div>
      )}

      <div
        className="p-5 flex flex-col gap-4"
        style={{ marginTop: highlight ? 100 : 0 }}
      >
        <span className="bg-[#004b5c] text-cyan-100 text-xs font-semibold px-2 py-1 rounded-full w-fit">
          {type}
        </span>

        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-400">{stack}</p>

        <p className="text-sm text-gray-300 leading-snug">
          Plataforma responsiva para explorar destinos, com filtros, dark mode e
          animações suaves.
        </p>

        <a
          href="#"
          className="bg-gradient-to-r from-[#A27DFB] to-[#6E8CFA] text-white text-sm font-medium px-4 py-2 rounded-md w-fit mt-2 hover:opacity-90 transition"
          onClick={onClick}
        >
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};

export default Card;
