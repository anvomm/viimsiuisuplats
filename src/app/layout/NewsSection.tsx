"use client";

import { useRef } from "react";

import { useTranslation } from "../i18n/client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSpring, animated } from "react-spring";

import { News } from "../@types/news-model";

import { NewsCard } from "../components/NewsCard";

import { news } from "@/data/news";

import { Pattaya } from "next/font/google";

interface Props {
  lng: string;
}

const pattaya = Pattaya({ subsets: ["latin", "cyrillic"], weight: "400" });

export const NewsSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "news");

  const newsTriggerRef = useRef<HTMLElement | null>(null);

  const dataRef = useIntersectionObserver(newsTriggerRef, {
    freezeOnceVisible: true,
  });

  const newsStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, bottom: "-500px" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      bottom: dataRef?.isIntersecting ? "0px" : "-500px",
    },
  });

  return (
    <section id="news" className="py-[80px]" ref={newsTriggerRef}>
      <h2 className={`${pattaya.className} text-4xl text-center mb-6`}>
        {t("title")}
      </h2>
      <ul className="flex flex-col items-center gap-6">
        {news.map((post: News) => (
          <animated.li
            style={newsStyle}
            className="w-1/2 p-5 bg-white rounded-lg shadow-xl relative"
            key={post.id}
          >
            <NewsCard post={post} />
          </animated.li>
        ))}
      </ul>
    </section>
  );
};
