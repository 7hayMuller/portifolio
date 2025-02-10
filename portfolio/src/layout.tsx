import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./styles/globals.css";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "300"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Thayná Müller",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Thayná Müller</title>
      </Head>
      <body className={(lato.className, roboto.className)}>{children}</body>
    </html>
  );
}
