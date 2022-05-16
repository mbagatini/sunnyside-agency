import Link from "next/link";

import styles from "./GridParagraph.module.scss";

interface GridParagraphProps {
  children: React.ReactNode;
  linkColor: "yellow" | "pink";
}

export function GridParagraph({ children, linkColor }: GridParagraphProps) {
  return (
    <div className={styles.container}>
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
  );
}
