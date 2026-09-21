"use client";

import { GalleryItem } from "@/lib/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import styles from "./gallery.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsReady(true);
  }, []);

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
        {items.map((i) => (
          <SwiperSlide key={i.image.src} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <Image
                src={i.image}
                placeholder="blur"
                alt={i.caption ?? "alt"}
              />
              <Image
                className={styles.ambiance}
                src={i.image}
                placeholder="blur"
                alt={"ambiance image"}
                aria-hidden
              />
              <p className={styles.caption}>{i.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
