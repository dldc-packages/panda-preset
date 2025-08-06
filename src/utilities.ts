import { defineUtility } from "@pandacss/dev";
import {
  PROSE_BASE,
  PROSE_COLOR_NAMES,
  PROSE_COLORS,
  PROSE_INVERT,
  PROSE_SIZE_DYNAMIC,
} from "./prose.ts";

export const utilities = {
  prose: defineUtility({
    className: "prose",
    values: { type: "boolean" },
    group: "Typography",
    layer: "custom",
    transform: (_, { token }) => {
      return mergeStyles(
        PROSE_BASE,
        PROSE_SIZE_DYNAMIC,
        PROSE_COLORS(token)["neutral"],
      );
    },
  }),
  proseColor: defineUtility({
    className: "prose_color",
    values: [...PROSE_COLOR_NAMES],
    group: "Typography",
    layer: "custom",
    transform: (color, { token }) => {
      return (PROSE_COLORS(token) as Record<string, any>)[color] || {};
    },
  }),
  proseInvert: defineUtility({
    className: "prose_invert",
    values: { type: "boolean" },
    group: "Typography",
    layer: "custom",
    transform: () => PROSE_INVERT,
  }),
};

export function round(num: number): string {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
}

export function rem(px: number): string {
  return `${round(px / 16)}rem`;
}

export function em(px: number, base: number): string {
  return `${round(px / base)}em`;
}

export function hexToRgb(hex: string | undefined): string {
  if (!hex) return "0 0 0"; // Default to black if hex is undefined
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

export function mergeStyles(
  ...styles: Record<string, any>[]
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const style of styles) {
    for (const [key, value] of Object.entries(style)) {
      if (
        result[key] && typeof result[key] === "object" &&
        typeof value === "object"
      ) {
        // Merge nested styles
        result[key] = { ...result[key], ...value };
      } else {
        // Override or set the style
        result[key] = value;
      }
    }
  }
  return result;
}
