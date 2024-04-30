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

const metadataEt: Metadata = {
  title: "Viimsi Uisuplats - uisuplats sinu kodu lähedal",
  description:
    "",
  icons: {
    icon: "/favicon.ico",
  },
};

const metadataEn: Metadata = {
  title: "TehRemont - your assistant repair",
  description:
    "",
  icons: {
    icon: "/favicon.ico",
  },
};

const metadataRu: Metadata = {
  title: "Viimsi Uisuplats - ледовая площадка вблизи от твоего дома",
  description:
    "",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateMetadata({ params }: Props) {
  return params.lng === "en"
    ? metadataEn
    : params.lng === "et"
    ? metadataEt
    : metadataRu;
}

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
