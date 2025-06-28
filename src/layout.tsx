import type { Metadata } from "next";
import { Lato, Roboto, Poppins } from "next/font/google";
import "./styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

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
  title: "Thayná Müller | Frontend Developer & UX/UI Designer",
  description:
    "Portfólio de Thayná Müller, desenvolvedora frontend e UX/UI designer.",
  keywords:
    "frontend, desenvolvedora, UI, UX, React, Next.js, JavaScript, Typescript",
  authors: [{ name: "Thayná Müller", url: "https://thaynamuller.com" }],
  creator: "Thayná Müller",
  metadataBase: new URL("https://thaynamuller.com"),
  openGraph: {
    title: "Thayná Müller | Frontend Developer & UX/UI Designer",
    description:
      "Conheça o trabalho de Thayná Müller, desenvolvedora frontend e UX/UI designer.",
    url: "https://thaynamuller.com",
    siteName: "Thayná Müller",
    images: [
      {
        url: "https://thaynamuller.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thayná Müller - Frontend Developer",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://thaynamuller.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${lato.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
