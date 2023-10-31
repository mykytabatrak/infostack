import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Button = forwardRef<
  ComponentRef<"button">,
  ComponentPropsWithoutRef<"button">
>(function Button({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={twMerge(
        "inline-flex h-8 items-center rounded border border-black bg-white px-3 text-black",
        className,
      )}
      {...props}
    />
  );
});
