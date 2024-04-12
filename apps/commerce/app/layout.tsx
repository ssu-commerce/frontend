import type { Metadata } from "next";
import Providers from "providers/provider";
import styled from "./root.module.css";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="ko">
      <head />
      <body className={styled.body} suppressHydrationWarning>
        <Providers>
          {children}
          <div id="portal" />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
