import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Ref = ComponentRef<"div">;
type Props = ComponentPropsWithoutRef<"div">;

export const Skeleton = forwardRef<Ref, Props>(function Skeleton(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={twMerge("animate-pulse bg-grayA-3", className)}
      {...props}
    />
  );
});
