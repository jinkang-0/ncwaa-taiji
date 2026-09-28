import styles from "./catalog.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CompendiumCardAlignment, CompendiumItem } from "@/lib/types";

interface CatalogCardOverlayProps {
  item: CompendiumItem;
  alignment: CompendiumCardAlignment;
  elementRef: React.RefObject<HTMLAnchorElement | null>;
  handleOpenModal: () => void;
}

export default function CatalogCardOverlay({
  item,
  alignment,
  elementRef,
  handleOpenModal,
}: CatalogCardOverlayProps) {
  const [element, setElement] = useState<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setElement(elementRef.current);
    }
  }, [elementRef]);

  return (
    <motion.div
      className={clsx(styles.itemOverlay, styles[`${alignment}Align`])}
      initial={{
        opacity: 0,
        width: element?.getBoundingClientRect().width,
      }}
      animate={{
        opacity: 1,
        width: element?.getBoundingClientRect().width
          ? element?.getBoundingClientRect().width * 1.5
          : 0,
      }}
      exit={{
        opacity: 0,
        width: element?.getBoundingClientRect().width,
        height: element?.getBoundingClientRect().height,
        transition: {
          duration: 0.2,
          opacity: { delay: 0.1 },
        },
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <Link
        href={`?id=${item.id}`}
        className={styles.overlayLink}
        onNavigate={handleOpenModal}
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
          {item.otherNames && item.otherNames.length > 0 && (
            <div className={styles.tags}>
              {item.otherNames.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
