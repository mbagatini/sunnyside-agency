import Link from "next/link";
import Image, { ImageProps } from "next/image";

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
      <a>
        <Image src={image.src} alt={image.alt} />
      </a>
    </Link>
  );
}
