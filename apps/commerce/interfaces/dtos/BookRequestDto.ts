import { UUID } from "crypto";
import { ISO, PageUtil } from "types";

export interface BookDto {
  title: string; // not '';
  subtitle: string;
  previewSrc: string; // not '';
  content: string | null;
  writer: string; // not '';
  price: number; // not null;
  publishDate: ISO | null;
  isbn: string; // not '';
  maxBorrowDay: number; // not null;
  categoryId: UUID; // not null;
}

export default interface BookListRequestDto {
  list: BookDto[];
  pageUtil: PageUtil;
}
