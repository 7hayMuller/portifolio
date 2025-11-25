import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Front-end | UX/UI designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
