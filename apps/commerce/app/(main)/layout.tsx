import type { ReactNode } from "react";
import { Layout } from "component/common/layout";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout.Header />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer />
    </>
  );
};

export default MainLayout;
