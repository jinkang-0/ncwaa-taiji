"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Pagination } from "swiper/modules";
import { CompendiumItem } from "@/lib/types";
import { useEffect, useMemo, useRef, useState } from "react";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import CatalogCard from "./catalog-card";
import { CatalogContextProvider } from "./catalog-context";
import styles from "./catalog.module.scss";

const alignments = [
  ["middle"],
  ["left", "right"],
  ["left", "middle", "right"],
] as const;

export default function CompendiumCatalog({
  items,
}: {
  items: CompendiumItem[];
}) {
  const swiperRef = useRef<SwiperRef>(null);
  const overlayPortalRef = useRef<HTMLDivElement>(null);
  const [groupSize, setGroupSize] = useState(3);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleSmallBreakpoint = (ev: MediaQueryListEvent) => {
      if (ev.matches) setGroupSize(1);
      else setGroupSize(2);
    };

    const handleMediumBreakpoint = (ev: MediaQueryListEvent) => {
      if (ev.matches) setGroupSize(2);
      else setGroupSize(3);
    };

    const handleLargeBreakpoint = (ev: MediaQueryListEvent) => {
      if (ev.matches) setGroupSize(3);
      else setGroupSize(2);
    };

    const smBreakpoint = window.matchMedia("(max-width: 46.875rem)");
    const mdBreakpoint = window.matchMedia("(max-width: 59.375rem)");
    const lgBreakpoint = window.matchMedia("(min-width: 59.375rem)");

    smBreakpoint.addEventListener("change", handleSmallBreakpoint);
    mdBreakpoint.addEventListener("change", handleMediumBreakpoint);
    lgBreakpoint.addEventListener("change", handleLargeBreakpoint);

    // initial check
    if (smBreakpoint.matches) {
      handleSmallBreakpoint(new MediaQueryListEvent("", { matches: true }));
    } else if (mdBreakpoint.matches) {
      handleMediumBreakpoint(new MediaQueryListEvent("", { matches: true }));
    }

    return () => {
      smBreakpoint.removeEventListener("change", handleSmallBreakpoint);
      mdBreakpoint.removeEventListener("change", handleMediumBreakpoint);
      lgBreakpoint.removeEventListener("change", handleLargeBreakpoint);
    };
  }, []);

  const groupedItems = useMemo(
    () =>
      items.reduce((acc: (typeof items)[0][][], item, index) => {
        const groupIndex = Math.floor(index / groupSize);
        if (acc.length <= groupIndex) {
          acc.push([]);
        }
        acc[groupIndex].push(item);
        return acc;
      }, []),
    [items, groupSize],
  );

  return (
    <div className={styles.container}>
      <CatalogContextProvider>
        <Swiper
          modules={[Autoplay, Mousewheel, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className={styles.carousel}
          spaceBetween={0}
          loop
          speed={500}
          pagination={{ clickable: true }}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
          }}
          ref={swiperRef}
        >
          {groupedItems.map((grp) => (
            <SwiperSlide
              key={grp[0].title}
              className={styles.carouselItemWrapper}
            >
              <div className={styles.itemGroup}>
                {grp.map((i, idx) => (
                  <CatalogCard
                    key={i.title}
                    item={i}
                    alignment={alignments[groupSize - 1][idx % groupSize]}
                    overlayPortalRef={overlayPortalRef}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {items.length > groupSize && (
          <>
            <CarouselControlLeft swiperRef={swiperRef} />
            <CarouselControlRight swiperRef={swiperRef} />
          </>
        )}
        <div ref={overlayPortalRef} className={styles.overlayPortal} />
      </CatalogContextProvider>
    </div>
  );
}

function CarouselControlLeft({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperRef | null>;
}) {
  return (
    <button
      className={styles.carouselControlLeft}
      onClick={() => swiperRef.current?.swiper.slidePrev()}
      aria-label="Previous slide"
    >
      <ChevronLeft />
    </button>
  );
}

function CarouselControlRight({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperRef | null>;
}) {
  return (
    <button
      className={styles.carouselControlRight}
      onClick={() => swiperRef.current?.swiper.slideNext()}
      aria-label="Next slide"
    >
      <ChevronRight />
    </button>
  );
}
