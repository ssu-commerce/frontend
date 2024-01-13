import type { Metadata } from "next";
import * as S from "../styles";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main>
      {S.globalStyles}
      <S.Header>
        <S.Nav></S.Nav>
      </S.Header>
      {children}
    </main>
  );
}
