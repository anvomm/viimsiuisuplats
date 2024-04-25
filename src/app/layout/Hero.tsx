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
      setLang(lng);
    }
  }, [lng]);

  const { t } = useTranslation(lng, "hero");

  return (
    <section className="h-[450px] bg-cover bg-center bg-no-repeat bg-[url('../../assets/images/hero.webp')] sm:h-[580px]">
      {lang && (
        <div className="flex justify-end pr-4 pt-[100px] sm:pr-[50px] md:pr-[100px] lg:pr-[200px]">
          <h1
            className={`${pattaya.className} text-3xl block h-[200px] w-[200px] text-center leading-relaxed text-[#054a7d] sm:text-4xl sm:leading-relaxed sm:w-[250px] sm:h-[400px] md:w-[350px] md:text-5xl md:leading-relaxed`}
          >
            <MysteriousText lngChanged={needToupdate}>
              {t("title")}
            </MysteriousText>
          </h1>
        </div>
      )}
    </section>
  );
};
