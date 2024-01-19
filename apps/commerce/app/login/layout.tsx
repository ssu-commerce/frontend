"use client";

import { Layout } from "component/common/layout";
import { Metadata } from "next";
import { ReactNode } from "react";

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout.Header />
      <Layout.Banner />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer></Layout.Footer>
    </>
  );
};

export default LoginLayout;
