import { HTMLProps } from "react";
import Link from "next/link";

interface MenuItemProps extends HTMLProps<HTMLLIElement> {
  href: string;
}

export function MenuItem({ children, href, ...props }: MenuItemProps) {
  return (
    <li {...props}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
