import Image from "next/image";

import styles from "./Header.module.scss";
import { MenuItem } from "./MenuItem";

export function Header() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={128}
        height={24}
        layout="fixed"
      />

      <menu className={styles.menu}>
        <MenuItem href="/">About</MenuItem>
        <MenuItem href="/">Services</MenuItem>
        <MenuItem href="/">Projects</MenuItem>
        <MenuItem href="/" className={styles.contact}>
          CONTACT
        </MenuItem>
      </menu>
    </div>
  );
}
