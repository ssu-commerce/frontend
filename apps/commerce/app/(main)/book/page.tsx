"use client";

import { Button, ColorKey, SizeKey, TextField, VariantKey } from "@sc/ui";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import FilterIcon from "assets/svg/filter_icon.svg";
import BigRoundIcon from "assets/svg/grid_big_round_icon.svg";
import BiViewListIcon from "assets/svg/bi_view_list_icon.svg";
import { Card } from "component/common/card";
import { Pagination } from "component/common/pagination";
import { BiView } from "component/common/biView";
import * as S from "./book.styles";
import { ViewMode } from "./book.constants";
import axios from "utils/common/axios";
import { useQuery } from "@tanstack/react-query";
import BookListRequestDto from "interfaces/dtos/BookRequestDto";

const BookList = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Around);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState("6");

  const {
    data: bookList = {
      list: [],
      pageUtil: {
        size: 6,
        total: 0,
      },
    },
    isSuccess,
  } = useQuery<BookListRequestDto>({
    queryKey: ["book", "list", currentPage],
    queryFn: () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/book/list?page=${currentPage}&size=6`,
      );
    },
  });

  const handleMovePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  const changeViewMode = (e: MouseEvent) => {
    e.preventDefault();
    const { value } = e.currentTarget as HTMLButtonElement;
    setViewMode(value as ViewMode);
  };

  if (!isSuccess) return <div>Loading...</div>;

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
        <S.Status>
          Showing {currentPage} {currentPage + size} of{" "}
          {bookList.pageUtil.total} results
        </S.Status>
        <S.Sort>
          <S.SortItem>
            <S.SortLabel>Show</S.SortLabel>
            <TextField
              color={ColorKey.Secondary}
              css={{ width: "56px" }}
              placeholder="16"
              size={SizeKey.MD}
              value={size}
              onChange={handleChangeSize}
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
          {bookList.list.map((item) => {
            return (
              <S.Item key={item.isbn}>
                <Card item={item} />
              </S.Item>
            );
          })}
        </S.CardView>
      )}
      {viewMode === ViewMode.Bi && (
        <S.BiView>
          {bookList.list.map((item) => {
            return (
              <S.Item key={item.isbn}>
                <BiView item={item} />
              </S.Item>
            );
          })}
        </S.BiView>
      )}
      <S.Page>
        <Pagination
          currentPage={currentPage}
          lastPage={bookList.pageUtil.total / bookList.pageUtil.size}
          onClick={handleMovePage}
        />
      </S.Page>
    </S.BookSection>
  );
};

export default BookList;
