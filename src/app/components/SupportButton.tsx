"use client";

import { useState } from "react";

import { Modal } from "@mui/base";
import { Backdrop } from "./Backdrop";

import { useTranslation } from "../i18n/client";

import { SupportModal } from "./SupportModal";

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
        <span className="mask py-2 rounded text-sm my-auto font-bold w-[140px] sm:w-[200px] sm:text-base md:w-[150px] md:text-lg lg:w-[250px] lg:text-xl">
          {t("button")}
        </span>
        <button
          className="py-2 text-sm rounded font-bold support-button w-[140px] sm:w-[200px] sm:text-base md:w-[150px] md:text-lg lg:w-[250px] lg:text-xl"
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
        <SupportModal lng={lng} closeModal={handleClose} copyBtnClicked={copyBtnClicked} setCopyBtnClicked={setCopyBtnClicked} />
      </Modal>
    </>
  );
};
