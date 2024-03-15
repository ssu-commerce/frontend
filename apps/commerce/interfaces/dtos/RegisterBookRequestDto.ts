import type { Iso, UUID } from "../../types";

export default interface RegisterBookRequestDto {
  title: string; // not '';
  content: string | null;
  writer: string; // not '';
  price: number; // not null;
  publishDate: Iso | null;
  isbn: string; // not '';
  maxBorrowDay: number; // not null;
  categoryId: UUID; // not null;
}
