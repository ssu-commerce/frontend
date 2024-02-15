"use client";

import type { ReactNode } from "react";
import { Layout } from "component/common/layout";

export const BookLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout.Header />
      <Layout.Banner />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer />
    </>
  );
};

export default BookLayout;
