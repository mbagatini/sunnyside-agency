import Image from "next/image";

import { useBreakpoint } from "../../hooks/useBreakpoint";

import imgBannerMobile from "/public/images/mobile/image-header.jpg";
import imgBannerDesktop from "/public/images/desktop/image-header.jpg";
import imgArrow from "/public/images/icon-arrow-down.svg";

import styles from "./Banner.module.scss";

export function Banner() {
  const { isMobile } = useBreakpoint();

  const imgBanner = isMobile ? imgBannerMobile : imgBannerDesktop;

  return (
    <section className={styles.container}>
      <Image src={imgBanner} alt="banner" layout="responsive" />
      <h1>WE ARE CREATIVES</h1>

      <div className={styles["icon-container"]}>
        <Image src={imgArrow} alt="Arrow icon" />
      </div>
    </section>
  );
}
