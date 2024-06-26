"use client";

import { useRef } from "react";

import { useSpring, animated } from "react-spring";
import { useTranslation } from "../i18n/client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/* import { pattaya } from "@/utils/fonts"; */
import { Pattaya } from "next/font/google";

interface Props {
  lng: string;
}

const pattaya = Pattaya({ subsets: ["latin", "cyrillic"], weight: "400" });

export const AboutSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "about");

  const aboutTriggerRef = useRef<HTMLElement | null>(null);
  const dataRef = useIntersectionObserver(aboutTriggerRef, {
    freezeOnceVisible: true,
  });

  const aboutStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, right: "-500px" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      right: dataRef?.isIntersecting ? "0px" : "-500px",
    },
  });

  return (
    <section
      id="about"
      className="px-10 pt-[30px] text-sm text-medium text-center sm:pt-[50px] sm:text-base md:text-lg"
      ref={aboutTriggerRef}
    >
      <h2
        className={`${pattaya.className} text-2xl mb-6 sm:text-3xl md:text-4xl`}
      >
        {t("title")}
      </h2>
      <animated.div style={aboutStyle} className="relative">
        <p>
          ViimsiUisuplats on ilmunud tänu kohalike elanike initsiatiivile. Antud
          teema on suunatud jäähoki- ja teiste uisuspordi tegevuste arendamisele
          Viimsi elanike- ja külaliste jaoks.
        </p>
      </animated.div>
    </section>
  );
};
