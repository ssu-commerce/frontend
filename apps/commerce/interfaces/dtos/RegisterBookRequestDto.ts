import type { ISO, UUID } from "../../types";

export default interface RegisterBookRequestDto {
  title: string; // not '';
  content: string | null;
  writer: string; // not '';
  price: number; // not null;
  publishDate: ISO | null;
  isbn: string; // not '';
  maxBorrowDay: number; // not null;
  categoryId: UUID; // not null;
  bookId?: UUID;
}
