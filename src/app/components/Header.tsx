"use client";

import Image from "next/image";
import Link from "next/link";

import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";

import { useTranslation } from "../i18n/client";
import { useRouter } from "next/navigation";

import { SupportButton } from "./SupportButton";

import logo from "../../../public/logo.png";
import langLogo from "../../assets/images/language.png";
import est from "../../assets/svgs/est.svg";
import eng from "../../assets/svgs/eng.svg";
import rus from "../../assets/svgs/rus.svg";

interface Props {
  lng: string;
}

export const Header = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "header");

  const router = useRouter();

const handleLngChange = (language: string) => {
  location.replace(`/${language}`)
} 
  return (
    <header className="bg-[#077ed9] h-[100px] px-10 flex items-center justify-between">
      <Image src={logo} alt="logo" width={200} height={53} />
      <div className="w-[60%] flex justify-between items-center">
        <SupportButton lng={lng} />
        <div className="flex gap-[40px] items-center">
          <Link
            className="text-lg text-white font-semibold transition-colors hover:text-[#F7D65A]"
            href={"/#about"}
          >
            {t("menu.about")}
          </Link>
          <Link
            className="text-lg text-white font-semibold transition-colors hover:text-[#F7D65A]"
            href={"/#news"}
          >
            {t("menu.news")}
          </Link>
          <Link
            className="text-lg text-white font-semibold transition-colors hover:text-[#F7D65A]"
            href={"/#contacts"}
          >
            {t("menu.contacts")}
          </Link>
        </div>
      </div>
      <Dropdown>
        <MenuButton>
          <Image
            src={langLogo}
            alt="change language logo"
            width={50}
            height={50}
          />
        </MenuButton>
        <Menu className="bg-[#136bad] p-7 rounded-lg text-white">
          <MenuItem className="flex gap-2 mb-3">
            <button className="flex items-center gap-2 transition-colors hover:text-[#F7D65A]" onClick={() => handleLngChange("et")}>
              <Image src={est} alt="Estonian flag" width={25} height={25} />{" "}
              {t("languages.est")}
            </button>
          </MenuItem>
          <MenuItem className="flex gap-2 mb-3">
            <button className="flex items-center gap-2 transition-colors hover:text-[#F7D65A]" onClick={() => handleLngChange("en")}>
              <Image src={eng} alt="English flag" width={25} height={25} />
              {t("languages.en")}
            </button>
          </MenuItem>
          <MenuItem className="flex gap-2">
            <button className="flex items-center gap-2 transition-colors hover:text-[#F7D65A]" onClick={() => handleLngChange("ru")}>
              <Image src={rus} alt="Russian flag" width={25} height={25} />
              {t("languages.ru")}
            </button>
          </MenuItem>
        </Menu>
      </Dropdown>
    </header>
  );
};
