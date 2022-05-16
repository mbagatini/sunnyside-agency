import Image, { StaticImageData } from "next/image";

import styles from "./ClientTestimonial.module.scss";

interface ClientTestimonialProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  children: React.ReactNode;
}

export function ClientTestimonial({ image, children }: ClientTestimonialProps) {
  return (
    <div className={styles.container}>
      <Image
        src={image.src}
        alt={image.alt}
        width={70}
        height={70}
        className={styles.profile}
      />
      {children}
    </div>
  );
}
