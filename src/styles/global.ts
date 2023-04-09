import { globalCss } from "@ignite-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontFamily: roboto.style.fontFamily,
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
  },
});
