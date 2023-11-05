import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { button } from "../class-names";

type Ref = ComponentRef<typeof Link>;
interface Props
  extends ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof button> {}

export const LinkButton = forwardRef<Ref, Props>(function LinkButton(
  { className, intent, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      className={twMerge(button({ className, intent }), "cursor-pointer")}
      {...props}
    />
  );
});
