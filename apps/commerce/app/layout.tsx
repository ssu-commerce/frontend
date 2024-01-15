import type { Metadata } from "next";
import Layout from "component/layout";
import StyledJsxProvider from "./emotion";
import { ThemeProvider } from "./theme";
import styled from "./root.module.css";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="ko">
      <head />
      <body className={styled.body} suppressHydrationWarning>
        <StyledJsxProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </StyledJsxProvider>
        <div id="portal" />
      </body>
    </html>
  );
};

export default RootLayout;
