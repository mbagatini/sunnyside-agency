import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import styles from "./ParagraphWithPicture.module.scss";

interface ParagraphWithPictureProps {
  children: React.ReactNode;
  linkColor: "yellow" | "pink";
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export function ParagraphWithPicture({
  children,
  linkColor,
  image,
}: ParagraphWithPictureProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}

        <Link href="/">
          <a
            className={`${styles.link} ${
              linkColor == "yellow" ? styles.yellow : styles.pink
            }`}
          >
            <span>LEARN MORE</span>
          </a>
        </Link>
      </div>

      <div className={styles.image}>
        <Image
          src={image.src}
          alt={image.alt}
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}
