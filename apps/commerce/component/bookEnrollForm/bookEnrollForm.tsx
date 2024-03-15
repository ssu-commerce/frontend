"use client";
import type { FormEvent } from "react";
import {useEffect} from "react";
import {
  useBookEnrollFormActions,
  useGetBookEnrollFormCategoryId,
  useGetBookEnrollFormContent,
  useGetBookEnrollFormIsbn,
  useGetBookEnrollFormMaxBorrowDay,
  useGetBookEnrollFormPrice,
  useGetBookEnrollFormPublishDate,
  useGetBookEnrollFormTitle,
  useGetBookEnrollFormWriter,
} from "../../stores/bookEnrollFormStore";

export const BookEnrollForm = () => {
  const title = useGetBookEnrollFormTitle();
  const content = useGetBookEnrollFormContent();
  const writer = useGetBookEnrollFormWriter();
  const price = useGetBookEnrollFormPrice();
  const publishDate = useGetBookEnrollFormPublishDate();
  const isbn = useGetBookEnrollFormIsbn();
  const maxBorrowDay = useGetBookEnrollFormMaxBorrowDay();
  const categoryId = useGetBookEnrollFormCategoryId();
  const {
    reset,
    setTitle,
    setContent,
    setWriter,
    setPrice,
    setPublishDate,
    setIsbn,
    setMaxBorrowDay,
    setCategoryId,
  } = useBookEnrollFormActions();

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({
    //   title,
    //   content,
    //   writer,
    //   price,
    //   publishDate,
    //   isbn,
    //   maxBorrowDay,
    //   categoryId,
    // });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        value={title}
      />
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        value={content}
      />
      <input
        onChange={(e) => {
          setWriter(e.target.value);
        }}
        type="text"
        value={writer}
      />
      <input
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
        type="number"
        value={price}
      />
      <input
        onChange={(e) => {
          setPublishDate(e.target.value);
        }}
        type="date"
        value={publishDate}
      />
      <input
        onChange={(e) => {
          setIsbn(e.target.value);
        }}
        type="text"
        value={isbn}
      />
      <input
        onChange={(e) => {
          setMaxBorrowDay(Number(e.target.value));
        }}
        type="number"
        value={maxBorrowDay}
      />
      <input
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
        type="text"
        value={categoryId}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
