import Image from "next/image";
import { MenuLinks } from "../MenuLinks";

import { SocialMediaLinks } from "./SocialMediaLinks";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src="/images/logo.svg"
        alt="Sunnyside"
        width={176}
        height={36}
        className={styles.logo}
      />

      <nav className={styles.nav}>
        <MenuLinks />
      </nav>

      <SocialMediaLinks />
    </footer>
  );
}
