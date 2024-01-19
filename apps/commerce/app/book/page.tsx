"use client";

import { Button, ColorKey, SizeKey, TextField, VariantKey } from "@sc/ui";
import type { MouseEvent } from "react";
import { useState } from "react";
import FilterIcon from "assets/svg/filter_icon.svg";
import BigRoundIcon from "assets/svg/grid_big_round_icon.svg";
import BiViewListIcon from "assets/svg/bi_view_list_icon.svg";
import { Card } from "component/common/card";
import { Pagination } from "component/common/pagination";
import { BiView } from "component/common/biView";
import { MOCK } from "../../mock/constants";
import * as S from "./book.styles";
import { ViewMode } from "./book.constants";

export const BookList = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Around);
  const [currentPage, setCurrentPage] = useState(1);
  const handleMovePage = (page: number) => {
    setCurrentPage(page);
  };

  const changeViewMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setViewMode(value as ViewMode);
  };

  return (
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
          onClick={changeViewMode}
          size={SizeKey.MD}
          startIcon={<BigRoundIcon />}
          value={ViewMode.Around}
          variant={VariantKey.Text}
        />
        <Button
          color={ColorKey.Secondary}
          onClick={changeViewMode}
          size={SizeKey.MD}
          startIcon={<BiViewListIcon />}
          value={ViewMode.Bi}
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
      {viewMode === ViewMode.Around && (
        <S.CardView>
          {MOCK.bookList.map((item) => {
            return (
              <S.Item key={item.previewSrc}>
                <Card item={item} />
              </S.Item>
            );
          })}
        </S.CardView>
      )}
      {viewMode === ViewMode.Bi && (
        <S.BiView>
          {MOCK.bookList.map((item) => {
            return (
              <S.Item key={item.previewSrc}>
                <BiView item={item} />
              </S.Item>
            );
          })}
        </S.BiView>
      )}
      <S.Page>
        <Pagination
          currentPage={currentPage}
          lastPage={10}
          onClick={handleMovePage}
        />
      </S.Page>
    </S.BookSection>
  );
};

export default BookList;
