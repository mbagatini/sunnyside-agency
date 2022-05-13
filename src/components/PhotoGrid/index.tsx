import Image from "next/image";

import styles from "./PhotoGrid.module.scss";

import bottlesImg from "/public/images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "/public/images/desktop/image-gallery-orange.jpg";
import sugarImg from "/public/images/desktop/image-gallery-sugarcubes.jpg";
import coneImg from "/public/images/desktop/image-gallery-cone.jpg";

export function PhotoGrid() {
  return (
    <div className={styles.container}>
      <Image src={bottlesImg} alt="Bottles of milk" objectFit="cover" />
      <Image src={orangeImg} alt="Orange in a bowl" objectFit="cover" />
      <Image src={coneImg} alt="Icecream cone" objectFit="cover" />
      <Image src={sugarImg} alt="Sugarcubes" objectFit="cover" />
    </div>
  );
}
