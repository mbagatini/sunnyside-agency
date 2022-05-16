import Link from "next/link";
import Image, { ImageProps } from "next/image";

import styles from "./SocialMediaItem.module.scss";

interface SocialMediaItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export function SocialMediaItem({
  href,
  image,
  ...rest
}: SocialMediaItemProps) {
  return (
    <Link href={href} {...rest}>
      <a className={styles.link}>
        <Image src={image.src} alt={image.alt} />
      </a>
    </Link>
  );
}
