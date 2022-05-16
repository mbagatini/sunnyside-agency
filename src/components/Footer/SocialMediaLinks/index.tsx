import { SocialMediaItem } from "../SocialMediaItem";

import facebookIcon from "/public/images/icon-facebook.svg";
import instagramIcon from "/public/images/icon-instagram.svg";
import pinterestIcon from "/public/images/icon-pinterest.svg";
import twitterIcon from "/public/images/icon-twitter.svg";

import styles from "./SocialMediaLinks.module.scss";

export function SocialMediaLinks() {
  return (
    <div className={styles.container}>
      <SocialMediaItem
        href="/"
        image={{ src: facebookIcon, alt: "Facebook" }}
      />
      <SocialMediaItem
        href="/"
        image={{ src: instagramIcon, alt: "Instagram" }}
      />
      <SocialMediaItem href="/" image={{ src: twitterIcon, alt: "Twitter" }} />
      <SocialMediaItem
        href="/"
        image={{ src: pinterestIcon, alt: "Pinterest" }}
      />
    </div>
  );
}
