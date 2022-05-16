import Image from "next/image";

import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { Footer } from "../components/Footer";

import imgBannerMobile from "/public/images/mobile/image-header.jpg";
import imgBannerDesktop from "/public/images/desktop/image-header.jpg";
import imgArrow from "/public/images/icon-arrow-down.svg";
import { useBreakpoint } from "../hooks/useBreakpoint";

function Home() {
  const point = useBreakpoint();

  const imgBanner = point == "xs" ? imgBannerMobile : imgBannerDesktop;

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
      <Footer />
    </div>
  );
}

export default Home;
