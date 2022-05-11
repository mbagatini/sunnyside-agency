import Image, { StaticImageData } from "next/image";

import styles from "./GridPhotoDescription.module.scss";

interface GridPhotoDescriptionProps {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
}

export function GridPhotoDescription({
  src,
  alt,
  children,
}: GridPhotoDescriptionProps) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} objectFit="cover" layout="fill" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
