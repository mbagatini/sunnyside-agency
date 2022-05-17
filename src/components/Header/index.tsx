import Image from "next/image";
import imgMenu from "/public/images/icon-hamburger.svg";

import { useBreakpoint } from "../../hooks/useBreakpoint";
import { MenuItem } from "../MenuItem";
import { MenuLinks } from "../MenuLinks";

import styles from "./Header.module.scss";
import { useState } from "react";

export function Header() {
  const { isMobile } = useBreakpoint();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const showMenu = (isMobile && menuIsOpen) || !isMobile;

  let menuClasses = [styles.menu];
  if (showMenu) menuClasses.push(styles["show-menu"]);
  if (isMobile) menuClasses.push(styles["menu-mobile"]);

  return (
    <div className={styles.container}>
      <Image
        src="/images/logo.svg"
        alt="Sunnyside"
        width={128}
        height={24}
        layout="fixed"
      />

      {isMobile && (
        <button
          className={styles["menu-icon"]}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <Image src={imgMenu} alt="menu" />
        </button>
      )}

      <menu className={menuClasses.join(" ")}>
        <MenuLinks />
        <MenuItem href="/" className={styles.contact}>
          CONTACT
        </MenuItem>
      </menu>
    </div>
  );
}
