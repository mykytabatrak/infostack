import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { cx } from "class-variance-authority";

type Ref = ComponentRef<"div">;
type Props = ComponentPropsWithoutRef<"div">;

export const Skeleton = forwardRef<Ref, Props>(function Skeleton(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx("bg-grayA-3 animate-pulse", className)}
      {...props}
    />
  );
});
