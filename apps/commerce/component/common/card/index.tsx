import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { addComma } from "@sc/utils";

export interface CardItem {
  href: string;
  previewSrc: string;
  title: string;
  subtitle: string;
  price: number;
}

export const Card = ({ item }: { item: CardItem }) => {
  const { href, previewSrc, title, subtitle, price } = item;
  return (
    <S.Wrapper>
      <Link href={href}>
        <Image
          src={previewSrc}
          alt="book-card"
          placeholder="empty"
          priority={true}
          width={285}
          height={300}
        />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.Price>{addComma(price)}원</S.Price>
        </S.Info>
      </Link>
    </S.Wrapper>
  );
};
