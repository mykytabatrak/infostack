"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme
        accentColor="lime"
        grayColor="sage"
        radius="large"
        scaling="100%"
        panelBackground="translucent"
        className="contents"
      >
        {children}
      </Theme>
    </ThemeProvider>
  );
}
