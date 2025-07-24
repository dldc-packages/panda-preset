import { definePreset, type Preset } from "@pandacss/dev";
import { preset as pandaPreset } from "@pandacss/preset-panda";
import { globalCss } from "./src/globalCss.ts";
import { globalVars } from "./src/globalVars.ts";
import { patterns } from "./src/patterns.ts";
import { textStyles } from "./src/textStyles.ts";
import { tokens } from "./src/tokens.ts";
import { utilities } from "./src/utilities.ts";

const dldcPreset: Preset = definePreset({
  name: "dldc-preset",
  globalCss,
  globalVars,
  theme: {
    extend: {
      ...pandaPreset.theme,
      tokens,
      textStyles,
    },
  },
  utilities: {
    extend: utilities,
  },
  patterns: {
    extend: patterns,
  },
  conditions: {
    extend: {
      activeItem: "&[data-active-item]",
      disabled:
        "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",
      roundedStart: "&[data-rounded-start]",
      roundedEnd: "&[data-rounded-end]",
      firstChild: "& *[data-first]",
      betweenChild: "& *[data-between]",
      lastChild: "& *[data-last]",
    },
  },
});

export default dldcPreset;
