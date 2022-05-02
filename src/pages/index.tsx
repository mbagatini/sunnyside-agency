import Image from "next/image";

import { Header } from "../components/Header";
import styles from "../styles/Home.module.scss";

import imgBannerMobile from "../../public/images/mobile/image-header.jpg";
import imgBannerDesktop from "../../public/images/desktop/image-header.jpg";

function Home() {
  return (
    <div>
      <Header />

      <div className={styles.banner}>
        <Image src={imgBannerDesktop} alt="banner" layout="responsive" />
        <h1>WE ARE CREATIVES</h1>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow"
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Home;
