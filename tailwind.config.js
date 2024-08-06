/** @type {import('tailwindcss').Config} */
const colors = require("@radix-ui/colors");
const { Figtree } = require("next/font/google");

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/@/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      special: "#c0ffee",
      ...simplifyColorNames({
        gray: colors.slate,
        grayA: colors.slateA,
        blue: colors.iris,
        red: colors.tomato,
        redA: colors.tomatoA,
        green: colors.jade,
        greenA: colors.jadeA,
        yellow: colors.yellow,
        blackA: colors.blackA,
        whiteA: colors.whiteA,
      }),
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-secondary)",
          inverse: "var(--bg-inverse)",
          neutral: "var(--bg-neutral)",
          info: "var(--bg-info)",
          success: "var(--bg-success)",
          warning: "var(--bg-warning)",
          critical: "var(--bg-critical)",
        },
        material: {
          ultrathin: "var(--material-ultrathin)",
          thin: "var(--material-thin)",
          DEFAULT: "var(--material-regular)",
          thick: "var(--material-thick)",
        },
        surface: {
          DEFAULT: "var(--surface-primary)",
          hover: "var(--surface-primary-hover)",
          active: "var(--surface-primary-active)",
          secondary: {
            DEFAULT: "var(--surface-secondary)",
            hover: "var(--surface-secondary-hover)",
            active: "var(--surface-secondary-active)",
          },
        },
        fill: {
          DEFAULT: "var(--fill-primary)",
          hover: "var(--fill-primary-hover)",
          active: "var(--fill-primary-active)",
          secondary: {
            DEFAULT: "var(--fill-secondary)",
            hover: "var(--fill-secondary-hover)",
            active: "var(--fill-secondary-active)",
          },
          tertiary: {
            DEFAULT: "var(--fill-tertiary)",
            hover: "var(--fill-tertiary-hover)",
            active: "var(--fill-tertiary-active)",
          },
          brand: {
            DEFAULT: "var(--fill-brand)",
            hover: "var(--fill-brand-hover)",
            active: "var(--fill-brand-active)",
          },
          neutral: {
            DEFAULT: "var(--fill-neutral)",
            hover: "var(--fill-neutral-hover)",
            active: "var(--fill-neutral-active)",
          },
          info: {
            DEFAULT: "var(--fill-info)",
            hover: "var(--fill-info-hover)",
            active: "var(--fill-info-active)",
          },
          success: {
            DEFAULT: "var(--fill-success)",
            hover: "var(--fill-success-hover)",
            active: "var(--fill-success-active)",
          },
          warning: {
            DEFAULT: "var(--fill-warning)",
            hover: "var(--fill-warning-hover)",
            active: "var(--fill-warning-active)",
          },
          critical: {
            DEFAULT: "var(--fill-critical)",
            hover: "var(--fill-critical-hover)",
            active: "var(--fill-critical-active)",
          },
        },
        fg: {
          DEFAULT: "var(--fg-primary)",
          secondary: "var(--fg-secondary)",
          tertiary: "var(--fg-tertiary)",
          quaternary: "var(--fg-quaternary)",
          inverse: "var(--fg-inverse)",
          contrast: "var(--fg-contrast)",
          brand: "var(--fg-brand)",
          info: "var(--fg-info)",
          success: "var(--fg-success)",
          warning: "var(--fg-warning)",
          critical: "var(--fg-critical)",
        },
        text: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
          inverse: "var(--text-inverse)",
          contrast: "var(--text-contrast)",
          info: "var(--text-info)",
          success: "var(--text-success)",
          warning: "var(--text-warning)",
          critical: "var(--text-critical)",
        },
        icon: {
          DEFAULT: "var(--icon-primary)",
          secondary: "var(--icon-secondary)",
          info: "var(--icon-info)",
          success: "var(--icon-success)",
          warning: "var(--icon-warning)",
          critical: "var(--icon-critical)",
        },
        border: {
          DEFAULT: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          tertiary: "var(--border-tertiary)",
        },
        activity: {
          liked: "var(--activity-liked)",
          commented: "var(--activity-commented)",
          mentioned: "var(--activity-mentioned)",
          followed: "var(--activity-followed)",
        },
        ring: "var(--ring)",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        //   foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
      },
      fontFamily: {
        body: ["var(--font-figtree)"],
        display: ["var(--font-fraunces), serif"],
      },
      fontSize: {
        largetitle: ["2.125rem", "2.625rem"],
        title1: ["1.75rem", "2.125rem"],
        title2: ["1.375rem", "1.75rem"],
        // title3: ["1.25rem", "1.5625rem"],
        title3: ["1.25rem", "1.5rem"],
        // body: ["1.0625rem", "1.375rem"],
        body: ["1rem", "1.375rem"],
        callout: ["1rem", "1.3125rem"],
        // subheadline: ["0.9375rem", "1.25rem"],
        subheadline: ["0.875rem", "1.25rem"],
        footnote: ["0.8125rem", "1.125rem"],
        caption1: ["0.75rem", "1rem"],
        caption2: ["0.6875rem", "0.8125rem"],
        titleLg: ["2rem", "2.25rem"],
        titleMd: ["1.625rem", "1.875rem"],
        titleSm: ["1.375rem", "1.625rem"],
        titleXs: ["1.125rem", "1.375rem"],
        bodyXl: ["1.125rem", "1.5rem"],
        bodyXlTall: ["1.125rem", "1.75rem"],
        bodyLg: ["1rem", "1.25rem"],
        bodyLgTall: ["1rem", "1.5rem"],
        bodyMd: ["0.875rem", "1.125rem"],
        bodyMdTall: ["0.875rem", "1.25rem"],
        bodySm: ["0.75rem", "1rem"],
        bodyXs: ["0.625rem", "0.75rem"],
      },
      boxShadow: {
        button: "0 0 0 1px rgba(0, 0, 0, 0.3) inset",
        buttonHover:
          "0 0 0 1px rgba(0, 0, 0, 0.3) inset, 0 2px 1px 0px rgba(0, 0, 0, 0.1)",
        buttonActive:
          "0 0 0 1px rgba(0, 0, 0, 0.5) inset, 0 2px 1px 0px rgba(0, 0, 0, 0.2) inset",
        borderBottom: "0 1px 0 0 var(--nav-shadow)",
        borderRight: "1px 0 0 0 var(--nav-shadow)",
        borderTop: "0 -1px 0 0 var(--nav-shadow)",
        borderLeft: "-1px 0 0 0 var(--nav-shadow)",
        borderInput: "0 0 0 1px var(--border-primary)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

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

// Utility function to convert the hexcodes to RGBA
function hexToRGBA(hex) {
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
