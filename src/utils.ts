export function serializeSize(size: number): string {
  const base = size >= 0 ? Math.floor(size / 4) : Math.ceil(size / 4);
  const baseStr = base.toFixed(0);
  const remainder = size % 4;
  if (remainder === 0) {
    return baseStr;
  }
  const remainderStr = (remainder / 4).toString(2).replace(/^-?0\.?/, "")
    .replace(/0/g, "_").replace(/1/g, "x");
  return baseStr + remainderStr;
}

export function range(
  min: number,
  max: number,
  moduloFilter: number,
): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter((
    value,
  ) => value % moduloFilter === 0);
}

export function buildSizeTokenMap(
  values: number[],
  formatKey: (value: number) => string,
): Record<string, { value: string }> {
  return Object.fromEntries(
    values.map((value) => [formatKey(value), { value: `${value / 16}rem` }]),
  );
}

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
