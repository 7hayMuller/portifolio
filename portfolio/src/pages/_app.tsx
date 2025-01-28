import { AppProps } from "next/app";
import "../styles/globals.css";
import locales from "@/locales";
export { locales };

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
