"use client";

import { useEffect } from "react";

export function ColorSchemeController() {
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    function switchColorSchemeToLight() {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    function switchColorSchemeToDark() {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    if (
      !document.documentElement.classList.contains("dark") &&
      !document.documentElement.classList.contains("light")
    ) {
      if (mediaQueryList.matches) {
        switchColorSchemeToDark();
      } else {
        switchColorSchemeToLight();
      }
    }

    function handleChange(event: MediaQueryListEventMap["change"]) {
      if (event.matches) {
        switchColorSchemeToDark();
      } else {
        switchColorSchemeToLight();
      }
    }

    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return null;
}
