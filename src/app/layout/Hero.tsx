"use client";

import { useState, useEffect } from "react";

import { useTranslation } from "../i18n/client";

import { MysteriousText } from "../components/MysteriousText";

import { Pattaya } from "next/font/google";

interface Props {
  lng: string;
}

const pattaya = Pattaya({ subsets: ["latin", "cyrillic"], weight: "400" });

export const Hero = ({ lng }: Props): JSX.Element => {
  const [needToupdate, setNeedToUpdate] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("");

  useEffect(() => {
    setLang(lng);
  }, []);

  useEffect(() => {
    if (lng !== lang) {
      setNeedToUpdate(!needToupdate);
      setLang(lng)
    }
  }, [lng]);

  const { t } = useTranslation(lng, "hero");

  return (
    <section className="h-[580px] bg-cover bg-center bg-no-repeat bg-[url('../../assets/images/hero.webp')]">
     {lang && <div className="flex justify-end pr-[200px] pt-[100px]">
        <h1
          className={`${pattaya.className} text-5xl h-[400px] w-[350px] text-center leading-relaxed text-[#054a7d]`}
        >
          <MysteriousText lngChanged={needToupdate}>{t("title")}</MysteriousText>
        </h1>
      </div>}
    </section>
  );
};
