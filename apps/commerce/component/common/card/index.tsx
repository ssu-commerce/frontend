import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { addComma } from "@sc/utils";
import { BookDto } from "interfaces/dtos/BookRequestDto";

interface CardViewProps {
  item: BookDto;
}

export const Card = ({ item }: CardViewProps) => {
  const { previewSrc, title, subtitle, price, isbn } = item;
  return (
    <S.Wrapper>
      <Link href={`/book/edit/${isbn}`}>
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
