import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";

export interface BookCard {
  href: string;
  previewSrc: string;
  title: string;
  subtitle: string;
  price: number;
}

export const BookCard = ({ item }: { item: BookCard }) => {
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
          <S.Price>{price}</S.Price>
        </S.Info>
      </Link>
    </S.Wrapper>
  );
};
