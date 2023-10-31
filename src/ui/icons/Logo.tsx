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
        "h-6 w-6 fill-black stroke-white dark:fill-white dark:stroke-black",
        className,
      )}
      aria-label="Infostack logotype"
      {...props}
    >
      <rect stroke="none" x="2" y="2" width="20" height="20" rx="4" />
      <path
        fill="none"
        d="M18.2111 14.1056L12.4472 11.2236C12.1657 11.0828 11.8343 11.0828 11.5528 11.2236L5.78885 14.1056C5.05181 14.4741 5.05181 15.5259 5.78885 15.8944L11.5528 18.7764C11.8343 18.9172 12.1657 18.9172 12.4472 18.7764L18.2111 15.8944C18.9482 15.5259 18.9482 14.4741 18.2111 14.1056Z"
      />
      <path
        fill="none"
        d="M18.2111 8.10557L12.4472 5.22361C12.1657 5.08284 11.8343 5.08284 11.5528 5.22361L5.78885 8.10557C5.05181 8.4741 5.05181 9.5259 5.78885 9.89443L11.5528 12.7764C11.8343 12.9172 12.1657 12.9172 12.4472 12.7764L18.2111 9.89443C18.9482 9.5259 18.9482 8.4741 18.2111 8.10557Z"
      />
      <path
        fill="none"
        d="M18.2111 11.1056L12.4472 8.22361C12.1657 8.08284 11.8343 8.08284 11.5528 8.22361L5.78885 11.1056C5.05181 11.4741 5.05181 12.5259 5.78885 12.8944L11.5528 15.7764C11.8343 15.9172 12.1657 15.9172 12.4472 15.7764L18.2111 12.8944C18.9482 12.5259 18.9482 11.4741 18.2111 11.1056Z"
      />
    </svg>
  );
});
