import clsx from "clsx";
// import { twMerge } from "tailwind-merge";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  override: {},
  extend: {
    classGroups: {
      "font-size": [
        "text-largetitle",
        "text-title1",
        "text-title2",
        "text-title3",
        "text-body",
        "text-callout",
        "text-subheadline",
        "text-footnote",
        "text-caption1",
        "text-caption2",
      ],
      "text-color": [],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function hexToRGBA(hex) {
  if (hex.length === 9) {
    // Checks for #RRGGBBAA format
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const a = parseInt(hex.slice(7, 9), 16) / 255; // Normalize alpha to 0-1
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return hex;
}
