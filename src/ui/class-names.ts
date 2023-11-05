import { cva } from "class-variance-authority";

export const button = cva(
  "inline-flex h-8 cursor-default items-center rounded px-3",
  {
    variants: {
      intent: {
        solid:
          "text-white hover:solid-button-hover-filter active:solid-button-hover-filter bg-gray-12",
        outline:
          "border border-solid border-gray-12 text-gray-12 hover:bg-gray-a2 active:bg-gray-a2",
      },
    },
    defaultVariants: {
      intent: "solid",
    },
  },
);
