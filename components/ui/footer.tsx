import FacebookIcon from "@/icons/facebook";
import InstagramIcon from "@/icons/instagram";
import YoutubeIcon from "@/icons/youtube";
import { CONTACT_CONFIG } from "@/data/cms-config";
import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return <FooterDefault />;
}

function FooterDefault() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.emailLink}
        href={`mailto:${CONTACT_CONFIG.email}`}
      >
        {CONTACT_CONFIG.email}
      </Link>
      <div className={styles.footerIcons}>
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
    </footer>
  );
}
