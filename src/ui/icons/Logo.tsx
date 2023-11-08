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
      className={twMerge("stroke-accent-9 h-6 w-6 fill-none", className)}
      aria-label="Infostack logotype"
      {...props}
    >
      <path
        d="M21.3905 16.1221L12.4789 11.2612C12.1804 11.0984 11.8196 11.0984 11.5211 11.2612L2.60948 16.1221C1.91461 16.5011 1.91461 17.4989 2.60947 17.8779L11.5211 22.7388C11.8196 22.9016 12.1804 22.9016 12.4789 22.7388L21.3905 17.8779C22.0854 17.4989 22.0854 16.5011 21.3905 16.1221Z"
        strokeWidth="2"
      />
      <path
        d="M21.3905 11.1221L12.4789 6.26119C12.1804 6.09839 11.8196 6.09839 11.5211 6.26119L2.60948 11.1221C1.91461 11.5011 1.91461 12.4989 2.60947 12.8779L11.5211 17.7388C11.8196 17.9016 12.1804 17.9016 12.4789 17.7388L21.3905 12.8779C22.0854 12.4989 22.0854 11.5011 21.3905 11.1221Z"
        strokeWidth="2"
      />
      <path
        d="M21.3905 6.1221L12.4789 1.26119C12.1804 1.09839 11.8196 1.09839 11.5211 1.26119L2.60948 6.1221C1.91461 6.50112 1.91461 7.49888 2.60947 7.8779L11.5211 12.7388C11.8196 12.9016 12.1804 12.9016 12.4789 12.7388L21.3905 7.8779C22.0854 7.49888 22.0854 6.50112 21.3905 6.1221Z"
        fill="#BDEE63"
        strokeWidth="2"
      />
    </svg>
  );
});
