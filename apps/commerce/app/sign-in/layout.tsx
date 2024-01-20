"use client";

import { Layout } from "component/common/layout";
import { ReactNode } from "react";

export const SignInLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout.Header />
      <Layout.Banner />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer></Layout.Footer>
    </>
  );
};

export default SignInLayout;
