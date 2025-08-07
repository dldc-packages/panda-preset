import { defineRecipe } from "@pandacss/dev";
import {
  PROSE_BASE,
  PROSE_COLORS,
  PROSE_INVERT,
  PROSE_SIZE_DYNAMIC,
} from "./prose.ts";
import { mergeStyles } from "./utils.ts";

export const recipes = {
  prose: defineRecipe({
    className: "prose",
    defaultVariants: {
      proseColor: "neutral",
      proseInvert: true,
    },
    base: mergeStyles(PROSE_BASE, PROSE_SIZE_DYNAMIC),
    variants: {
      proseColor: PROSE_COLORS,
      proseInvert: {
        true: PROSE_INVERT,
      },
    },
  }),
};
