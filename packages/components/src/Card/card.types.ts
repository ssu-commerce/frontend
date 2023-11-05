import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
};
