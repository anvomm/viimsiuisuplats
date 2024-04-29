"use client";

import { useTranslation } from "../i18n/client";

import { TypeAnimation } from "react-type-animation";

import { Pattaya } from "next/font/google";

interface Props {
  lng: string;
}

const pattaya = Pattaya({ subsets: ["latin", "cyrillic"], weight: "400" });

export const Hero = ({ lng }: Props): JSX.Element => {

  const { t } = useTranslation(lng, "hero");

  return (
    <section className="h-[450px] bg-cover bg-center bg-no-repeat bg-[url('../../assets/images/hero.webp')] sm:h-[580px]">
        <div className="flex justify-end pr-4 pt-[100px] sm:pr-[50px] md:pr-[100px] lg:pr-[200px]">
          <h1
            className={`${pattaya.className} text-3xl block h-[200px] w-[200px] text-center leading-relaxed text-[#054a7d] sm:text-4xl sm:leading-relaxed sm:w-[250px] sm:h-[400px] md:w-[350px] md:text-5xl md:leading-relaxed`}
          >
            <TypeAnimation
              sequence={[
                t("title"),
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
              cursor={false}
            />
          </h1>
        </div>
    </section>
  );
};
