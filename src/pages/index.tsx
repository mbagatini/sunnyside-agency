import Image from "next/image";

import styles from "../styles/Home.module.scss";

import { useBreakpoint } from "../hooks/useBreakpoint";
import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { PhotoGrid } from "../components/PhotoGrid";
import { Footer } from "../components/Footer";

import imgBannerMobile from "/public/images/mobile/image-header.jpg";
import imgBannerDesktop from "/public/images/desktop/image-header.jpg";
import imgArrow from "/public/images/icon-arrow-down.svg";

function Home() {
  const { isMobile } = useBreakpoint();

  const imgBanner = isMobile ? imgBannerMobile : imgBannerDesktop;

  return (
    <div>
      <Header />

      <section className={styles.banner}>
        <Image src={imgBanner} alt="banner" layout="responsive" />
        <h1>WE ARE CREATIVES</h1>

        <div className={styles["icon-container"]}>
          <Image src={imgArrow} alt="Arrow icon" />
        </div>
      </section>

      <Grid />
      <PhotoGrid />
      <Footer />
    </div>
  );
}

export default Home;
