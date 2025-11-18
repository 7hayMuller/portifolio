import "./globals.css";

import { Anton, Pacifico, Raleway, Roboto_Mono } from "next/font/google";
import I18nProvider from "./i18n-provider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-raleway",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto-mono",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
