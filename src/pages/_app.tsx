import { AppProps } from "next/app";
import "../styles/globals.css";
import locales from "@/locales";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import dayjs from "dayjs";
import { Raleway } from "next/font/google";
export { locales };

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-raleway",
});

const App = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (["pt", "en"].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
      dayjs.locale(browserLang);
    } else {
      i18n.changeLanguage("en");
      dayjs.locale("en");
    }
  }, []);
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
