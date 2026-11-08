import FacebookIcon from "@/icons/facebook";
import InstagramIcon from "@/icons/instagram";
import YoutubeIcon from "@/icons/youtube";
import { EMAIL, LINKS } from "@/data/links";
import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return <FooterDefault />;
}

function FooterDefault() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.emailLink} href={`mailto:${EMAIL}`}>
        {EMAIL}
      </Link>
      <div className={styles.footerIcons}>
        <Link href={LINKS.instagram} target="_blank">
          <InstagramIcon />
        </Link>
        <Link href={LINKS.facebook} target="_blank">
          <FacebookIcon />
        </Link>
        <Link href={LINKS.youtube} target="_blank">
          <YoutubeIcon />
        </Link>
      </div>
    </footer>
  );
}
