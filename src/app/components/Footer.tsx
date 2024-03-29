"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";

import { useTranslation } from "../i18n/client";

import logo from "../../../public/logo.png";
import facebook from "../../assets/svgs/facebook.svg";
import instagram from "../../assets/svgs/instagram.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import twitter from "../../assets/svgs/twitter.svg";
import { pattaya } from "@/utils/fonts";

interface Props {
  lng: string;
}

export const Footer = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "footer");

  useEffect(() => {
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="bg-[#077ed9] pt-10 pb-2 px-10 relative z-20">
      <div className="flex justify-between mb-8">
        <Link href={"/"} className="inline-block">
          <Image src={logo} alt="logo" width={200} height={53} />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={"https://www.facebook.com/profile.php?id=61552853031563"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} width={40} alt="facebook logo" />
          </Link>
          <Link
            href={"https://www.instagram.com/uisuplats/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} width={40} alt="instagram logo" />
          </Link>
          <Link
            href={"https://twitter.com/ViimsiUisuplats"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} width={34} alt="twitter logo" />
          </Link>
          <Link
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
        className={`${pattaya.className} text-[28px] text-center mb-3`}
      >
        {t("title")}
      </h2>
      <ul className="flex flex-col justify-center items-center mb-[50px]">
        <li>
          {t("email")}:{" "}
          <Link
            className="text-[#030733]"
            href={"mailto:info@viimsiuisuplats.ee"}
          >
            info@viimsiuisuplats.ee
          </Link>
        </li>
      </ul>
      <p className="text-right">
        © <span id="year"></span> Viimsi Uisuplats. All rights reserved.
      </p>
    </footer>
  );
};
