import type { ReactNode } from "react";

export default function A({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  if (href.startsWith("https")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return <a href={href}>{children}</a>;
  }
}
