"use client";

import Image from "next/image";
import { Button, ColorKey, SizeKey, TextField, VariantKey } from "@sc/ui";
import Carousel from "component/carousel";
import FilterIcon from "assets/svg/filter_icon.svg";
import BigRoundIcon from "assets/svg/grid_big_round_icon.svg";
import ViewListIcon from "assets/svg/view_list_icon.svg";
import { BookCard } from "component/card/book";
import { MOCK } from "../../mock/constants";
import * as S from "./page.styles";

export const BookList = (): JSX.Element => {
  return (
    <>
      <S.SlideSection>
        <Carousel>
          <Image
            alt="banner1"
            height="316"
            placeholder="empty"
            priority
            src="/assets/Banner.png"
            width="100"
          />
        </Carousel>
      </S.SlideSection>
      <S.BookSection>
        <S.Filter>
          <Button
            color={ColorKey.Secondary}
            size={SizeKey.MD}
            startIcon={<FilterIcon />}
            variant={VariantKey.Text}
          >
            Filter
          </Button>
          <Button
            color={ColorKey.Secondary}
            size={SizeKey.MD}
            startIcon={<BigRoundIcon />}
            variant={VariantKey.Text}
          />
          <Button
            color={ColorKey.Secondary}
            size={SizeKey.MD}
            startIcon={<ViewListIcon />}
            variant={VariantKey.Text}
          />
          <S.Status>Showing 1–16 of 32 results</S.Status>
          <S.Sort>
            <S.SortItem>
              <S.SortLabel>Show</S.SortLabel>
              <TextField
                color={ColorKey.Secondary}
                css={{ width: "56px" }}
                placeholder="16"
                size={SizeKey.MD}
              />
            </S.SortItem>
            <S.SortItem>
              <S.SortLabel>Short by</S.SortLabel>
              <TextField
                color={ColorKey.Secondary}
                css={{ width: "160px" }}
                placeholder="Default"
                size={SizeKey.MD}
              />
            </S.SortItem>
          </S.Sort>
        </S.Filter>
        <S.BookList>
          {MOCK.bookList.map((item) => {
            return (
              <S.Item key={item.previewSrc}>
                <BookCard item={item} />
              </S.Item>
            );
          })}
        </S.BookList>
      </S.BookSection>
    </>
  );
};

export default BookList;
