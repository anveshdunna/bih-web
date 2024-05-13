/** @type {import('tailwindcss').Config} */
const colors = require("@radix-ui/colors");
const { Figtree } = require("next/font/google");

// Utility function to flatten and rename Radix colors
function simplifyColorNames(radixColors) {
  const simplified = {};
  for (const [palette, shades] of Object.entries(radixColors)) {
    simplified[palette] = {}; // Initialize a sub-object for each color palette
    for (const [shadeKey, colorValue] of Object.entries(shades)) {
      // Extract only the digits from the shade key
      const numericKey = shadeKey.match(/\d+/)[0];
      simplified[palette][numericKey] = colorValue;
    }
  }
  return simplified;
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      background: "#ffffff",
      ...simplifyColorNames({
        gray: colors.slate,
        grayA: colors.slateA,
        blue: colors.iris,
        red: colors.red,
        redA: colors.redA,
        green: colors.green,
        yellow: colors.yellow,
        blackA: colors.blackA,
        whiteA: colors.whiteA,
      }),
    },

    extend: {
      fontFamily: {
        body: ["var(--font-figtree)"],
        display: ["var(--font-fraunces), serif"],
      },
      fontSize: {
        largetitle: ["2.125rem", "2.625rem"],
        title1: ["1.75rem", "2.125rem"],
        title2: ["1.375rem", "1.75rem"],
        title3: ["1.25rem", "1.5625rem"],
        body: ["1.0625rem", "1.375rem"],
        callout: ["1rem", "1.3125rem"],
        subheadline: ["0.9375rem", "1.25rem"],
        footnote: ["0.8125rem", "1.125rem"],
        caption1: ["0.75rem", "1rem"],
        caption2: ["0.6875rem", "0.8125rem"],
      },
      boxShadow: {
        button:
          "0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0px 0px rgba(255, 255, 255, 0.4) inset, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        buttonHover:
          "0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0px 0px rgba(255, 255, 255, 0.4) inset, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        buttonActive:
          "0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 1px 0px rgba(0, 0, 0, 0.1) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        borderBottom: "0 -1px 0 0 rgba(0, 0, 0, 0.2) inset",
        borderRight: "-1px 0 0 0 rgba(0, 0, 0, 0.2) inset",
        borderTop: "0 1px 0 0 rgba(0, 0, 0, 0.2) inset",
        borderLeft: "1px 0 0 0 rgba(0, 0, 0, 0.2) inset",
      },
    },
  },
  plugins: [],
};
