import Image, { StaticImageData } from "next/image";

import styles from "./PhotoWithDescription.module.scss";

interface PhotoWithDescriptionProps {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
}

export function PhotoWithDescription({
  src,
  alt,
  children,
}: PhotoWithDescriptionProps) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} objectFit="cover" layout="fill" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
