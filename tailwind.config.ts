import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import * as allColorScales from "@radix-ui/colors";

function toCssCasing(str: string) {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

const colorScales = Object.entries(allColorScales).filter(([name]) =>
  ["gray"].some((key) => name.includes(key)),
);

const colorScalesKeys = colorScales
  .filter(([name]) => !name.includes("P3") && !name.includes("Dark"))
  .map(([, value]) => Object.keys(value))
  .flat();

const colorScalesByGroups = Object.entries(allColorScales).reduce<{
  light: {
    srgb: Record<string, string>;
    p3: Record<string, string>;
  };
  dark: {
    srgb: Record<string, string>;
    p3: Record<string, string>;
  };
}>(
  (previous, [name, values]) => {
    const isDark = name.includes("Dark");
    const isP3 = name.includes("P3");

    const transformedCustomProperties = Object.fromEntries(
      Object.entries(values).map(([name, value]) => [
        `--${toCssCasing(name)}`,
        value,
      ]),
    );

    previous[isDark ? "dark" : "light"][isP3 ? "p3" : "srgb"] = {
      ...previous[isDark ? "dark" : "light"][isP3 ? "p3" : "srgb"],
      ...transformedCustomProperties,
    };

    return previous;
  },
  {
    light: {
      srgb: {},
      p3: {},
    },
    dark: {
      srgb: {},
      p3: {},
    },
  },
);

const colorsPlugin = plugin(
  function ({ addBase, addUtilities }) {
    addBase([
      {
        "html, .light, .light-theme": colorScalesByGroups.light.srgb,
        "@supports (color: color(display-p3 1 1 1))": {
          "@media (color-gamut: p3)": {
            "html, .light, .light-theme": colorScalesByGroups.light.p3,
          },
        },
      },
      {
        ".dark, .dark-theme": colorScalesByGroups.dark.srgb,
        "@supports (color: color(display-p3 1 1 1))": {
          "@media (color-gamut: p3)": {
            ".dark, .dark-theme": colorScalesByGroups.dark.p3,
          },
        },
      },
      {
        "@media (prefers-color-scheme: dark)": {
          html: colorScalesByGroups.dark.srgb,
          "@supports (color: color(display-p3 1 1 1))": {
            "@media (color-gamut: p3)": {
              html: colorScalesByGroups.dark.p3,
            },
          },
        },
      },
    ]);
    addUtilities({
      ".solid-button-hover-filter": {
        filter: "contrast(0.82) saturate(1.1) brightness(1.1)",
      },
    });
  },
  {
    theme: {
      colors: Object.fromEntries(
        colorScalesKeys.map((keys) => [
          toCssCasing(keys),
          `var(--${toCssCasing(keys)})`,
        ]),
      ),
    },
  },
);

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "black",
        "app-background": "var(--app-background-color)",
        logo: "var(--logo-color)",
      },
    },
  },
  plugins: [colorsPlugin],
};
export default config;
