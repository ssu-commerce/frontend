import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { addComma } from "@sc/utils";

interface BiViewItem {
  href: string;
  previewSrc: string;
  title: string;
  subtitle: string;
  price: number;
}

interface BiViewProps {
  item: BiViewItem;
}

export const BiView = ({ item }: BiViewProps) => {
  const { href, previewSrc, title, subtitle, price } = item;
  return (
    <S.Wrapper>
      <Link href={href}>
        <Image
          src={previewSrc}
          alt="book-card"
          placeholder="empty"
          priority={true}
          width={150}
          height={150}
        />
        <S.Info>
          <S.Name>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.Name>
          <S.Price>{addComma(price)}원</S.Price>
        </S.Info>
      </Link>
    </S.Wrapper>
  );
};
