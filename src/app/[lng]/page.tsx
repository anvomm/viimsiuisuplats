import Image from "next/image";

import { Hero } from "../layout/Hero";
import { AboutSection } from "../layout/AboutSection";
import { NewsSection } from "../layout/NewsSection";

interface Props {
  params: { lng: string };
}

export default function Home({ params: { lng } }: Props) {
  return (
    <main>
      <Hero lng={lng} />
      <AboutSection lng={lng} />
      <NewsSection lng={lng} />
    </main>
  );
}
