import type { ReactNode } from "react";
import { Layout } from "component/common/layout";
import ErrorBoundary from "component/common/errorboundary";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary>
      <Layout.Header />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer />
    </ErrorBoundary>
  );
};

export default MainLayout;
