import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { globalStyles } from "./styles";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="ko">
      <body className={inter.className}>
        {globalStyles}
        {children}
      </body>
    </html>
  );
}
