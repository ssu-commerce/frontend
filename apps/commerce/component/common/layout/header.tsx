"use client";

import Image from "next/image";
import Link from "next/link";
import { Layout } from "./layout.constants";
import * as S from "./layout.styles";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <Image
            width={185}
            height={40}
            src="/assets/Logo.png"
            alt="logo"
            placeholder="empty"
            priority={true}
          />
        </Link>
      </S.Logo>
      <S.LNB>
        {Layout.Header.LNB.map(({ title, href }) => (
          <S.Item key={title}>
            <Link href={href}>{title}</Link>
          </S.Item>
        ))}
      </S.LNB>
      <S.Account>
        {Layout.Header.Account.map(({ src, alt, href }) => (
          <S.Item key={alt}>
            <Link href={href}>
              <Image
                width={28}
                height={28}
                src={src}
                alt={alt}
                placeholder="empty"
                priority={true}
              />
            </Link>
          </S.Item>
        ))}
      </S.Account>
    </S.Header>
  );
};

export default Header;
