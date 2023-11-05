import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { button } from "@/ui/class-names";

export const Button = forwardRef<
  ComponentRef<"button">,
  ComponentPropsWithoutRef<"button"> & VariantProps<typeof button>
>(function Button({ className, intent, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={twMerge(button({ className, intent }))}
      {...props}
    />
  );
});
