import Image from "next/image";
import { GridParagraph } from "../GridParagraph";

import styles from "./Grid.module.scss";

import eggImg from "/public/images/desktop/image-transform.jpg";
import glassImg from "/public/images/desktop/image-stand-out.jpg";
import cherryImg from "/public/images/desktop/image-graphic-design.jpg";
import tangerineImg from "/public/images/desktop/image-photography.jpg";
import { GridPhotoDescription } from "../GridPhotoDescription";

export function Grid() {
  return (
    <section className={styles.container}>
      <GridParagraph linkColor="yellow">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do
          mostof the marketing for you.
        </p>
      </GridParagraph>
      <div style={{ position: "relative" }}>
        <Image
          src={eggImg}
          alt="Transformation"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div style={{ position: "relative" }}>
        <Image src={glassImg} alt="Stand out" objectFit="cover" layout="fill" />
      </div>
      <GridParagraph linkColor="pink">
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
      </GridParagraph>

      <GridPhotoDescription src={cherryImg} alt="Graphic Design">
        <h1>Graphic Design</h1>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential client&apos;s attention
        </p>
      </GridPhotoDescription>
      <GridPhotoDescription src={tangerineImg} alt="Photography">
        <h1>Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </GridPhotoDescription>
    </section>
  );
}
