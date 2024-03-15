import { Pattaya, Raleway } from "next/font/google";

export const pattaya = Pattaya({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-pattaya",
});

export const raleway = Raleway({ subsets: ["latin", "cyrillic"] });
