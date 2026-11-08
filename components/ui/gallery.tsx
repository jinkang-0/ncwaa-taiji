"use client";

import { GalleryItem } from "@/lib/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import styles from "./gallery.module.scss";
import clsx from "clsx";
import { useIsMounted } from "@/hooks";

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const isReady = useIsMounted();

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Mousewheel]}
        className={clsx(styles.carousel, !isReady && styles.adjusted)}
        spaceBetween={42}
        slidesPerView="auto"
        centeredSlides
        loop
        autoplay={{
          delay: 2000,
        }}
        speed={500}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
      >
        {items.map((i) => {
          const src = typeof i.image === "string" ? i.image : i.image.src;
          const blurDataURL =
            typeof i.image === "string" ? undefined : i.image.blurDataURL;

          return (
          <SwiperSlide key={src} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <Image
                src={i.image}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                alt={i.caption ?? "alt"}
                width={1028}
                height={771}
              />
              <Image
                className={styles.ambiance}
                src={i.image}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                alt={"ambiance image"}
                width={1028}
                height={771}
                aria-hidden
              />
              <p className={styles.caption}>{i.caption}</p>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
