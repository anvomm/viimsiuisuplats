"use client";

import Image from "next/image";
import Link from "next/link";

import { SetStateAction, Dispatch } from "react";

import { useTranslation } from "../i18n/client";

import { pattaya } from "@/utils/fonts";
import seb from "../../assets/images/seb.jpg";
import coop from "../../assets/images/coop.png";
import swed from "../../assets/svgs/swed.svg";
import lhv from "../../assets/images/lhv.png";
import luminor from "../../assets/svgs/luminor.svg";
import close from "../../assets/svgs/close.svg";

interface Props {
  lng: string;
  closeModal: () => void;
  copyBtnClicked: string;
  setCopyBtnClicked: Dispatch<SetStateAction<string>>;
}

export const SupportModal = ({
  lng,
  closeModal,
  copyBtnClicked,
  setCopyBtnClicked,
}: Props): JSX.Element => {
  const { t } = useTranslation(lng, "support");

  return (
    <div className="w-[300px] bg-white pt-10 pb-6 px-4 rounded relative sm:w-[650px] sm:p-10">
      <Image
        src={close}
        priority
        alt="modal close icon"
        width={16}
        className="cursor-pointer absolute right-4 top-4"
        onClick={closeModal}
      />
      <h2
        className={`${pattaya.className} text-xl text-center mb-7 sm:text-[24px]`}
      >
        {t("title")}
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 mb-5 text-sm sm:text-base">
          <p className="font-semibold">{t("recipient")}:</p>
          <p>Viimsi Uisuplats oü</p>
        </div>
        <button
          className="rounded py-2 px-2 copy-btn sm:px-6"
          onClick={() => {
            setCopyBtnClicked("btn1");
            navigator.clipboard.writeText("Viimsi Uisuplats oü");
          }}
        >
          {copyBtnClicked === "btn1" ? t("copy-clicked") : t("copy")}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-4/6 flex flex-col gap-2 mb-5 text-sm sm:text-base">
          <p className="font-semibold">{t("number")}:</p>
          <p>EE494204278626956926, COOPpank</p>
        </div>
        <button
          className="rounded py-2 px-2 copy-btn sm:px-6"
          onClick={() => {
            setCopyBtnClicked("btn2");
            navigator.clipboard.writeText("EE494204278626956926");
          }}
        >
          {copyBtnClicked === "btn2" ? t("copy-clicked") : t("copy")}
        </button>
      </div>
      <div className="flex items-center justify-between mb-[50px]">
        <div className="w-4/6 flex flex-col gap-2 text-sm sm:text-base">
          <p className="font-semibold">{t("description")}:</p>
          <p>annetus Viimsi uisuväljaku rajamiseks</p>
        </div>
        <button
          className="rounded py-2 px-2 copy-btn sm:px-6"
          onClick={() => {
            setCopyBtnClicked("btn3");
            navigator.clipboard.writeText(
              "annetus Viimsi uisuväljaku rajamiseks"
            );
          }}
        >
          {copyBtnClicked === "btn3" ? t("copy-clicked") : t("copy")}
        </button>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 sm:justify-between sm:gap-0">
        <Link
          href={"https://www.swedbank.ee/private"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={swed}
            alt="swedbank logo"
            className="outline outline-[#dc8730] outline-1 p-1"
            width={100}
            height={50}
          />
        </Link>
        <Link
          href={"https://e.seb.ee/ib/login"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={seb}
            alt="seb bank logo"
            width={100}
            height={30}
          />
        </Link>
        <Link
          href={"https://www.lhv.ee/ibank/login"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={lhv}
            alt="lhv bank logo"
            width={100}
            height={30}
          />
        </Link>
        <Link
          href={"https://luminor.ee/era/kodulaen?m=login-modal"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={luminor}
            alt="luminor bank logo"
            width={100}
            height={30}
          />
        </Link>
        <Link
          href={
            "https://i.cooppank.ee/sso/?return=https%3A%2F%2Fi.cooppank.ee%2Flogin-et"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={coop}
            alt="coop bank logo"
            width={100}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};
