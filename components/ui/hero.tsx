import styles from "./hero.module.scss";
import Image, { type StaticImageData } from "next/image";
import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";
import YoutubeIcon from "@/icons/youtube";
import Link from "next/link";
import { CONTACT_CONFIG } from "@/data/cms-config";

interface HeroProps {
  heroImage: string | StaticImageData;
  title: string;
  subtitle: string;
}

export function Hero({ heroImage, title, subtitle }: HeroProps) {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        src={heroImage}
        alt="hero image"
        fill
        sizes="100vw"
        placeholder={
          typeof heroImage === "string" || !heroImage.blurDataURL
            ? "empty"
            : "blur"
        }
        blurDataURL={
          typeof heroImage === "string" ? undefined : heroImage.blurDataURL
        }
      />
      <div className={styles.imageCover}></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div>
          <p>{subtitle}</p>
        </div>
        <div className={styles.links}>
          <Link href={CONTACT_CONFIG.instagram} target="_blank">
            <InstagramIcon />
          </Link>
          <Link href={CONTACT_CONFIG.facebook} target="_blank">
            <FacebookIcon />
          </Link>
          <Link href={CONTACT_CONFIG.youtube} target="_blank">
            <YoutubeIcon />
          </Link>
        </div>
      </div>
      <div className={styles.transition}></div>
    </div>
  );
}
