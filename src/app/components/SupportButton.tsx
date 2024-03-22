"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Modal } from "@mui/base";
import { Backdrop } from "./Backdrop";

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
}

export const SupportButton = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "support");

  const [open, setOpen] = useState<boolean>(false);
  const [copyBtnClicked, setCopyBtnClicked] = useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCopyBtnClicked("");
  };
  return (
    <>
      <div className="button-container-2">
        <span className="mask py-2 w-[250px] rounded text-xl font-bold ">
          {t("button")}
        </span>
        <button
          className="py-2 w-[250px] text-xl rounded font-bold support-button"
          type="button"
          onClick={handleOpen}
        >
          {t("button")}
        </button>
      </div>
      <Modal
        className="fixed z-[300] inset-0 flex justify-center items-center"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <div className="w-[650px] bg-white p-10 rounded relative">
          <Image
            src={close}
            priority
            alt="modal close icon"
            width={16}
            className="cursor-pointer absolute right-4 top-4"
            onClick={handleClose}
          />
          <h2 className={`${pattaya.className} text-[24px] text-center mb-7`}>
            {t('title')}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 mb-5">
              <p className="font-semibold">{t('recipient')}:</p>
              <p>Viimsi Uisuplats oü</p>
            </div>
            <button
              className="rounded py-2 px-6 copy-btn"
              onClick={() => {
                setCopyBtnClicked("btn1");
                navigator.clipboard.writeText("Viimsi Uisuplats oü");
              }}
            >
              {copyBtnClicked === "btn1" ? t('copy-clicked') : t('copy')}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 mb-5">
              <p className="font-semibold">{t('number')}:</p>
              <p>EE494204278626956926, COOPpank</p>
            </div>
            <button
              className="rounded py-2 px-6 copy-btn"
              onClick={() => {
                setCopyBtnClicked("btn2");
                navigator.clipboard.writeText("EE494204278626956926");
              }}
            >
              {copyBtnClicked === "btn2" ? t('copy-clicked') : t('copy')}
            </button>
          </div>
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{t('description')}:</p>
              <p>annetus Viimsi uisuväljaku rajamiseks</p>
            </div>
            <button
              className="rounded py-2 px-6 copy-btn"
              onClick={() => {
                setCopyBtnClicked("btn3");
                navigator.clipboard.writeText(
                  "annetus Viimsi uisuväljaku rajamiseks"
                );
              }}
            >
              {copyBtnClicked === "btn3" ? t('copy-clicked') : t('copy')}
            </button>
          </div>
          <div className="flex justify-between items-center">
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
      </Modal>
    </>
  );
};
