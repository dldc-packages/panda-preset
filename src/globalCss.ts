import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    h: "full",
    bg: "neutral.950",
    colorScheme: "dark",
    colorPalette: "neutral",
  },
  "#root": {
    minHeight: "100vh",
  },
});
