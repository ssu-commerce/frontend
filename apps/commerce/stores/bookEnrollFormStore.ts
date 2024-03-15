import { create } from "zustand";
import type { Iso, UUID } from "../types";

abstract class BookEnrollFormStore {
  abstract title?: string;
  abstract content?: string;
  abstract writer?: string;
  abstract price?: number;
  abstract publishDate?: Iso;
  abstract isbn?: string;
  abstract maxBorrowDay?: number;
  abstract categoryId?: UUID;
  abstract actions: {
    reset: () => void;
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
    setWriter: (writer: string) => void;
    setPrice: (price: number) => void;
    setPublishDate: (publishDate: Iso) => void;
    setIsbn: (isbn: string) => void;
    setMaxBorrowDay: (maxBorrowDay: number) => void;
    setCategoryId: (categoryId: UUID) => void;
  };
}

const INITIAL_STATE = {
  title: undefined,
  content: undefined,
  writer: undefined,
  price: undefined,
  publishDate: undefined,
  isbn: undefined,
  maxBorrowDay: undefined,
  categoryId: undefined,
};

const useBookEnrollFormStore = create<BookEnrollFormStore>((set) => ({
  ...INITIAL_STATE,

  actions: {
    reset: () => {
      set(INITIAL_STATE);
    },
    setTitle: (title: string) => {
      set({ title });
    },
    setContent: (content: string) => {
      set({ content });
    },
    setWriter: (writer: string) => {
      set({ writer });
    },
    setPrice: (price: number) => {
      set({ price });
    },
    setPublishDate: (publishDate: Iso) => {
      set({ publishDate });
    },
    setIsbn: (isbn: string) => {
      set({ isbn });
    },
    setMaxBorrowDay: (maxBorrowDay: number) => {
      set({ maxBorrowDay });
    },
    setCategoryId: (categoryId: UUID) => {
      set({ categoryId });
    },
  },
}));

export const useGetBookEnrollFormTitle = () =>
  useBookEnrollFormStore((state) => state.title);
export const useGetBookEnrollFormContent = () =>
  useBookEnrollFormStore((state) => state.content);
export const useGetBookEnrollFormWriter = () =>
  useBookEnrollFormStore((state) => state.writer);
export const useGetBookEnrollFormPrice = () =>
  useBookEnrollFormStore((state) => state.price);
export const useGetBookEnrollFormPublishDate = () =>
  useBookEnrollFormStore((state) => state.publishDate);
export const useGetBookEnrollFormIsbn = () =>
  useBookEnrollFormStore((state) => state.isbn);
export const useGetBookEnrollFormMaxBorrowDay = () =>
  useBookEnrollFormStore((state) => state.maxBorrowDay);
export const useGetBookEnrollFormCategoryId = () =>
  useBookEnrollFormStore((state) => state.categoryId);
export const useBookEnrollFormActions = () =>
  useBookEnrollFormStore((state) => state.actions);
