"use client";

import type { ComponentRef, ComponentPropsWithoutRef } from "react";
import { forwardRef, useCallback, useMemo, useSyncExternalStore } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { cx } from "class-variance-authority";
import { useMergeRefs } from "@floating-ui/react";
import { IconButton, Slot } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { createComponentContext } from "@/lib/createComponentContext";

type CarouselContextValue = {
  emblaRef: UseEmblaCarouselType[0];
  // canScrollPrev: boolean;
  scrollPrev: VoidFunction;
  // canScrollNext: boolean;
  scrollNext: VoidFunction;
  loop?: boolean;
} | null;

const [CarouselContext, useCarouselContext] =
  createComponentContext<CarouselContextValue>("Carousel", null);

type CarouselRef = ComponentRef<"div">;
interface CarouselProps extends ComponentPropsWithoutRef<"div"> {
  loop?: boolean;
  asChild?: boolean;
}

export const Carousel = forwardRef<CarouselRef, CarouselProps>(
  function Carousel({ loop, asChild, className, ...props }, ref) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, [
      WheelGesturesPlugin(),
    ]);

    const Comp = asChild ? Slot : "div";

    // const  = useSyncExternalStore(
    //   (callback) => {
    //     if (!emblaApi) return () => {};

    //     emblaApi.on("init", callback);
    //     return () => {
    //       emblaApi.off("init", callback);
    //     };
    //   },
    //   () => "string",
    //   () => "string",
    // );

    const scrollPrev = useCallback(
      (jump?: boolean) => {
        !!emblaApi && emblaApi.scrollPrev(jump);
      },
      [emblaApi],
    );

    const scrollNext = useCallback(
      (jump?: boolean) => {
        !!emblaApi && emblaApi.scrollNext(jump);
      },
      [emblaApi],
    );

    const contextValue = useMemo(
      () => ({
        emblaRef,
        scrollPrev,
        scrollNext,
        loop,
      }),
      [emblaRef, scrollPrev, scrollNext, loop],
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <Comp
          ref={ref}
          className={cx(
            "grid grid-cols-1 grid-rows-1 rounded-4 bg-panel-solid",
            className,
          )}
          {...props}
        />
      </CarouselContext.Provider>
    );
  },
);

type CarouselViewportRef = ComponentRef<"div">;
interface CarouselViewportProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const CarouselViewport = forwardRef<
  CarouselViewportRef,
  CarouselViewportProps
>(function CarouselViewport({ asChild, className, ...props }, ref) {
  const context = useCarouselContext("CarouselViewport");
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={useMergeRefs([context.emblaRef, ref])}
      className={cx(
        "col-start-1 row-start-1 overflow-hidden rounded-4",
        className,
      )}
      {...props}
    />
  );
});

type CarouselContainerRef = ComponentRef<"div">;
interface CarouselContainerProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const CarouselContainer = forwardRef<
  CarouselContainerRef,
  CarouselContainerProps
>(function CarouselContainer({ asChild, className, ...props }, ref) {
  const context = useCarouselContext("CarouselViewport");
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cx(
        "flex touch-pan-y",
        context.loop && "*:ml-4",
        !context.loop && "space-x-4",
        className,
      )}
      {...props}
    />
  );
});

type CarouselSlideRef = ComponentRef<"div">;
interface CarouselSlideProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const CarouselSlide = forwardRef<CarouselSlideRef, CarouselSlideProps>(
  function CarouselSlide({ asChild, className, ...props }, ref) {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cx("flex-[0_0_100%] rounded-4", className)}
        {...props}
      />
    );
  },
);

type CarouselButtonRef = ComponentRef<typeof IconButton>;
type CarouselButtonProps = Omit<
  ComponentPropsWithoutRef<typeof IconButton>,
  "children"
>;

export const CarouselPrevButton = forwardRef<
  CarouselButtonRef,
  CarouselButtonProps
>(function CarouselPrevButton({ className, disabled, onClick, ...props }, ref) {
  const context = useCarouselContext("CarouselPrevButton");
  return (
    <IconButton
      variant="surface"
      className={cx(
        "isolate col-start-1 row-start-1 m-2 self-center",
        className,
      )}
      onClick={(...args) => {
        !!onClick && onClick(...args);
        context.scrollPrev();
      }}
      // disabled={disabled || !context.canScrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
    </IconButton>
  );
});

export const CarouselNextButton = forwardRef<
  CarouselButtonRef,
  CarouselButtonProps
>(function CarouselNextButton({ className, onClick, ...props }, ref) {
  const context = useCarouselContext("CarouselNextButton");
  return (
    <IconButton
      variant="surface"
      className={cx(
        "isolate col-start-1 row-start-1 m-2 self-center justify-self-end",
        className,
      )}
      onClick={(...args) => {
        !!onClick && onClick(...args);
        context.scrollNext();
      }}
      {...props}
    >
      <ChevronRightIcon />
    </IconButton>
  );
});
