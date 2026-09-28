"use client";

import styles from "./catalog.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { CompendiumCardAlignment, CompendiumItem } from "@/lib/types";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCatalogContext } from "./catalog-context";
import { createPortal } from "react-dom";
import { useCompendiumContext } from "./compendium-context";
import { AnimatePresence } from "motion/react";
import CatalogCardOverlay from "./catalog-card-overlay";

interface CatalogCardProps {
  item: CompendiumItem;
  alignment: CompendiumCardAlignment;
  overlayPortalRef: React.RefObject<HTMLDivElement | null>;
}

export default function CatalogCard({
  item,
  alignment,
  overlayPortalRef,
}: CatalogCardProps) {
  const elemRef = useRef<HTMLAnchorElement>(null);
  const { isCardHovered, setIsCardHovered } = useCatalogContext();
  const [isHovering, setIsHovering] = useState(false);
  const [overlayPortal, setOverlayPortal] = useState<HTMLDivElement | null>(
    null,
  );
  const { setDialogOpenedNaturally } = useCompendiumContext();

  const handleMouseEnter = useCallback(() => {
    setIsCardHovered(true);
    setIsHovering(true);
  }, [setIsCardHovered]);

  const handleMouseLeave = useCallback(() => {
    setIsCardHovered(false);
    setIsHovering(false);
  }, [setIsCardHovered]);

  const handleOpenModal = useCallback(() => {
    setDialogOpenedNaturally(true);
  }, [setDialogOpenedNaturally]);

  useEffect(() => {
    if (overlayPortalRef.current) {
      setOverlayPortal(overlayPortalRef.current);
    }
  }, [overlayPortalRef]);

  return (
    <div
      className={styles.carouselItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        ref={elemRef}
        onNavigate={handleOpenModal}
        href={`?id=${item.id}`}
        className={clsx(
          styles.carouselCard,
          isCardHovered && !isHovering && styles.lowerPresence,
        )}
        scroll={false}
      >
        <Image
          src={item.image}
          blurDataURL={typeof item.image === "string" ? item.image : undefined}
          placeholder="blur"
          className={styles.itemImage}
          alt={item.title}
          width="800"
          height="450"
        />
        <div className={styles.carouselItemContent}>
          <h6 className={styles.title}>{item.title}</h6>
          {item.otherNames.length > 0 && (
            <div className={styles.tags}>
              {item.otherNames.map((name) => (
                <span key={name} className={styles.tag}>
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
      {overlayPortal &&
        createPortal(
          <AnimatePresence>
            {isHovering && (
              <CatalogCardOverlay
                alignment={alignment}
                elementRef={elemRef}
                handleOpenModal={handleOpenModal}
                item={item}
              />
            )}
          </AnimatePresence>,
          overlayPortal,
        )}
    </div>
  );
}
