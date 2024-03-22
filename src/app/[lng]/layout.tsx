import type { Metadata } from "next";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

interface Props {
  children: React.ReactNode;
  params: { lng: string };
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${raleway.className} bg-[#dce3e8]`}>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
