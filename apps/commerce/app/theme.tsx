"use client";

import { Global } from "@emotion/react";
import { globalStyle } from "@sc-config/emotion";

export function ThemeProviders({ children }) {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
}
