import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./styles/globals.css";

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
      <body className={(lato.className, roboto.className)}>{children}</body>
    </html>
  );
}
