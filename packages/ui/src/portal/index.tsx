import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}
export const Portal = ({ children, selector }: PortalProps) => {
  const $element: HTMLElement | null = document.querySelector(selector);

  return $element && children
    ? (createPortal(children, $element) as ReactNode)
    : null;
};
