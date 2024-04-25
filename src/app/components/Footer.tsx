"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";

import { useTranslation } from "../i18n/client";

import logo from "../../../public/logo.png";
import logoSmall from "../../../public/logo-small.png";
import facebook from "../../assets/svgs/facebook.svg";
import instagram from "../../assets/svgs/instagram.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import twitter from "../../assets/svgs/twitter.svg";
import { Pattaya } from "next/font/google";

interface Props {
  lng: string;
}

const pattaya = Pattaya({ subsets: ["latin", "cyrillic"], weight: "400" });

export const Footer = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "footer");

  useEffect(() => {
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="bg-[#077ed9] pt-7 pb-2 px-10 relative z-20 sm:pt-10">
      <div className="flex justify-between mb-8">
        <Link href={"/"} className="hidden sm:inline-block">
          <Image src={logo} alt="logo" width={200} height={53} />
        </Link>
        <Link href={"/"} className="inline-block sm:hidden">
          <Image src={logoSmall} alt="logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            className="transition-all hover:scale-110 hover:drop-shadow-xl"
            href={"https://www.facebook.com/profile.php?id=61552853031563"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} width={40} alt="facebook logo" />
          </Link>
          <Link
            className="transition-all hover:scale-110 hover:drop-shadow-xl"
            href={"https://www.instagram.com/uisuplats/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} width={40} alt="instagram logo" />
          </Link>
          <Link
            className="transition-all hover:scale-110 hover:drop-shadow-xl"
            href={"https://twitter.com/ViimsiUisuplats"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} width={34} alt="twitter logo" />
          </Link>
          <Link
            className="transition-all hover:scale-110 hover:drop-shadow-xl"
            href={"https://www.linkedin.com/in/viimsi-uisuplats-0632ba2b5/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} width={47} alt="linkedin logo" />
          </Link>
        </div>
      </div>
      <h2
        id="contacts"
        className={`${pattaya.className} text-2xl text-center mb-3 sm:text-3xl md:text-[28px]`}
      >
        {t("title")}
      </h2>
      <ul className="flex flex-col justify-center items-center mb-[50px]">
        <li>
          {t("email")}:{" "}
          <Link
            className="text-[#030733] text-base sm:text-lg"
            href={"mailto:info@viimsiuisuplats.ee"}
          >
            info@viimsiuisuplats.ee
          </Link>
        </li>
      </ul>
      <p className="text-xs text-right sm:text-sm">
        © <span id="year"></span> Viimsi Uisuplats. All rights reserved.
      </p>
    </footer>
  );
};
