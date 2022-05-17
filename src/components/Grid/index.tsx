import Image from "next/image";
import { ParagraphWithPicture } from "./ParagraphWithPicture";
import { PhotoWithDescription } from "./PhotoWithDescription";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import styles from "./Grid.module.scss";

import eggImgDesktop from "/public/images/desktop/image-transform.jpg";
import glassImgDesktop from "/public/images/desktop/image-stand-out.jpg";
import cherryImgDesktop from "/public/images/desktop/image-graphic-design.jpg";
import tangerineImgDesktop from "/public/images/desktop/image-photography.jpg";

import eggImgMobile from "/public/images/mobile/image-transform.jpg";
import glassImgMobile from "/public/images/mobile/image-stand-out.jpg";
import cherryImgMobile from "/public/images/mobile/image-graphic-design.jpg";
import tangerineImgMobile from "/public/images/mobile/image-photography.jpg";

export function Grid() {
  const { isMobile } = useBreakpoint();

  return (
    <section>
      <ParagraphWithPicture
        linkColor="yellow"
        image={{
          src: isMobile ? eggImgMobile : eggImgDesktop,
          alt: "Transformation",
        }}
      >
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do
          mostof the marketing for you.
        </p>
      </ParagraphWithPicture>

      <ParagraphWithPicture
        linkColor="pink"
        image={{
          src: isMobile ? glassImgMobile : glassImgDesktop,
          alt: "Stand out",
        }}
      >
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
      </ParagraphWithPicture>

      <div className={styles["images-container"]}>
        <PhotoWithDescription
          src={isMobile ? cherryImgMobile : cherryImgDesktop}
          alt="Graphic Design"
        >
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client&apos;s
            attention.
          </p>
        </PhotoWithDescription>

        <PhotoWithDescription
          src={isMobile ? tangerineImgMobile : tangerineImgDesktop}
          alt="Photography"
        >
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </PhotoWithDescription>
      </div>
    </section>
  );
}
