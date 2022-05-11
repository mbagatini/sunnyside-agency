import Image from "next/image";
import imgMenu from "/public/images/icon-hamburger.svg";

import { useBreakpoint } from "../../hooks/useBreakpoint";
import { MenuItem } from "./MenuItem";

import styles from "./Header.module.scss";
import { useState } from "react";

export function Header() {
  const point = useBreakpoint();

  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const showMenu = (point == "xs" && menuIsOpen) || point != "xs";

  let menuClasses = [styles.menu];
  if (showMenu) menuClasses.push(styles["show-menu"]);
  if (point == "xs") menuClasses.push(styles["menu-mobile"]);

  return (
    <div className={styles.container}>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={128}
        height={24}
        layout="fixed"
      />

      {point == "xs" && (
        <button
          className={styles["menu-icon"]}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <Image src={imgMenu} alt="menu" />
        </button>
      )}

      <menu className={menuClasses.join(" ")}>
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
