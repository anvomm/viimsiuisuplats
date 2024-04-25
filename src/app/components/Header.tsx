"use client";

import Image from "next/image";
import Link from "next/link";

import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";

import { useTranslation } from "../i18n/client";
import { useRouter } from "next/navigation";

import { SupportButton } from "./SupportButton";

import logo from "../../../public/logo.png";
import logoSmall from "../../../public/logo-small.png";
import langLogo from "../../assets/images/language.png";
import menu from "../../assets/svgs/menu.svg";
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
    location.replace(`/${language}`);
  };
  return (
    <header className="bg-[#077ed9] h-[84px] px-4 flex items-center justify-between sm:px-10 sm:h-[100px] md:px-5 lg:px-10">
      <Link href={"/"} className="hidden sm:inline-block">
        <Image src={logo} alt="logo" width={200} height={53} />
      </Link>
      <Link href={"/"} className="inline-block sm:hidden">
        <Image src={logoSmall} alt="logo" width={50} height={50} />
      </Link>
      <div className="flex justify-between items-center md:w-[60%]">
        <SupportButton lng={lng} />
        <div className="hidden gap-[40px] items-center md:flex">
          <Link
            className="text-base text-white font-semibold transition-colors hover:text-[#F7D65A] lg:text-lg"
            href={"/#about"}
          >
            {t("menu.about")}
          </Link>
          <Link
            className="text-base text-white font-semibold transition-colors hover:text-[#F7D65A] lg:text-lg"
            href={"/#news"}
          >
            {t("menu.news")}
          </Link>
          <Link
            className="text-base text-white font-semibold transition-colors hover:text-[#F7D65A] lg:text-lg"
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
            className="sm:hidden"
            width={40}
            height={40}
          />
          <Image
            src={langLogo}
            alt="change language logo"
            className="hidden sm:block"
            width={50}
            height={50}
          />
        </MenuButton>
        <Menu className="bg-[#136bad] p-5 rounded-lg text-white sm:p-7">
          <MenuItem className="flex gap-2 mb-3">
            <button
              className="flex items-center gap-2 transition-colors hover:text-[#F7D65A] text-sm sm:text-base"
              onClick={() => handleLngChange("et")}
            >
              <Image src={est} alt="Estonian flag" width={25} height={25} />{" "}
              {t("languages.est")}
            </button>
          </MenuItem>
          <MenuItem className="flex gap-2 mb-3">
            <button
              className="flex items-center gap-2 transition-colors hover:text-[#F7D65A] text-sm sm:text-base"
              onClick={() => handleLngChange("en")}
            >
              <Image src={eng} alt="English flag" width={25} height={25} />
              {t("languages.en")}
            </button>
          </MenuItem>
          <MenuItem className="flex gap-2">
            <button
              className="flex items-center gap-2 transition-colors hover:text-[#F7D65A] text-sm sm:text-base"
              onClick={() => handleLngChange("ru")}
            >
              <Image src={rus} alt="Russian flag" width={25} height={25} />
              {t("languages.ru")}
            </button>
          </MenuItem>
        </Menu>
      </Dropdown>
      <div className="md:hidden">
        <Dropdown>
          <MenuButton>
            <Image
              src={menu}
              alt="Burger menu button"
              className="cursor-pointer"
              width={30}
              height={30}
            />
          </MenuButton>
          <Menu className="bg-[#136bad] p-5 rounded-lg text-white">
            <MenuItem className="mb-3">
              <Link
                className="text-sm text-white font-semibold transition-colors hover:text-[#F7D65A] sm:text-base"
                href={"/#about"}
              >
                {t("menu.about")}
              </Link>
            </MenuItem>
            <MenuItem className="mb-3">
              <Link
                className="text-sm text-white font-semibold transition-colors hover:text-[#F7D65A] sm:text-base"
                href={"/#news"}
              >
                {t("menu.news")}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className="text-sm text-white font-semibold transition-colors hover:text-[#F7D65A] sm:text-base"
                href={"/#contacts"}
              >
                {t("menu.contacts")}
              </Link>
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </header>
  );
};
