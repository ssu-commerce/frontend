"use client";

import { Global } from "@emotion/react";
import { globalStyle } from "@sc-config/emotion";

export const ThemeProvider = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
};
