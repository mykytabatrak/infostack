import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Logo = forwardRef<
  ComponentRef<"svg">,
  Omit<ComponentPropsWithoutRef<"svg">, "children">
>(function LogoDark({ className, ...props }, ref) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={twMerge(
        "h-6 w-6 fill-none stroke-logo",
        className,
      )}
      aria-label="Infostack logotype"
      {...props}
    >
      <path d="M21.3905 15.1221L12.4789 10.2612C12.1804 10.0984 11.8196 10.0984 11.5211 10.2612L2.60948 15.1221C1.91461 15.5011 1.91461 16.4989 2.60947 16.8779L11.5211 21.7388C11.8196 21.9016 12.1804 21.9016 12.4789 21.7388L21.3905 16.8779C22.0854 16.4989 22.0854 15.5011 21.3905 15.1221Z" />
      <path d="M21.3905 7.1221L12.4789 2.26119C12.1804 2.09839 11.8196 2.09839 11.5211 2.26119L2.60948 7.1221C1.91461 7.50112 1.91461 8.49888 2.60947 8.8779L11.5211 13.7388C11.8196 13.9016 12.1804 13.9016 12.4789 13.7388L21.3905 8.8779C22.0854 8.49888 22.0854 7.50112 21.3905 7.1221Z" />
      <path d="M21.3905 11.1221L12.4789 6.26119C12.1804 6.09839 11.8196 6.09839 11.5211 6.26119L2.60948 11.1221C1.91461 11.5011 1.91461 12.4989 2.60947 12.8779L11.5211 17.7388C11.8196 17.9016 12.1804 17.9016 12.4789 17.7388L21.3905 12.8779C22.0854 12.4989 22.0854 11.5011 21.3905 11.1221Z" />
    </svg>
  );
});
