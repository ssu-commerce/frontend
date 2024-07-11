import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "providers/mockRouter";
import Providers from "providers/testProvider";
import { server } from "mocks/server";
import Page from "./page";
import bookData from "mocks/json/book.json";

const bookMap = new Map<string, any>(Object.entries(bookData));
const id = "1";

const push = jest.fn();

const context = describe;

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
beforeEach(() => {
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <Providers>
        <Page params={{ "book-id": id }} />
      </Providers>
    </AppRouterContextProviderMock>,
  );
});

const init = async () => {
  const $title = await screen.findByLabelText("Title");
  const $content = await screen.findByLabelText("Content");
  const $writer = await screen.findByLabelText("Writer");
  const $price = await screen.findByLabelText("Price");
  const $date = await screen.findByLabelText("Date");
  const $isbn = await screen.findByLabelText("IsBn");
  const $borrow = await screen.findByLabelText("Borrow Day");
  const $category = await screen.findByLabelText("Category");
  const $submit = await screen.findByText("Edit");

  await userEvent.clear($title);
  await userEvent.clear($content);
  await userEvent.clear($writer);
  await userEvent.clear($price);
  await userEvent.clear($date);
  await userEvent.clear($isbn);
  await userEvent.clear($borrow);
  await userEvent.clear($category);

  return {
    $title,
    $content,
    $writer,
    $price,
    $date,
    $isbn,
    $borrow,
    $category,
    $submit,
  };
};

describe("도서 편집 페이지", () => {
  context("렌더링", () => {
    it("1. 컴포넌트 확인", async () => {
      const {
        $title,
        $content,
        $writer,
        $price,
        $date,
        $isbn,
        $borrow,
        $category,
      } = await init();

      expect($title).toBeInTheDocument();
      expect($content).toBeInTheDocument();
      expect($writer).toBeInTheDocument();
      expect($price).toBeInTheDocument();
      expect($date).toBeInTheDocument();
      expect($isbn).toBeInTheDocument();
      expect($borrow).toBeInTheDocument();
      expect($category).toBeInTheDocument();
    });

    it("2. 도서 정보 호출 API 정상 작동 확인", async () => {
      const {
        $title,
        $content,
        $writer,
        $price,
        $date,
        $isbn,
        $borrow,
        $category,
      } = await init();

      const data = bookMap.get(id);

      waitFor(() => {
        expect($title).toHaveValue(data.title);
        expect($content).toHaveValue(data.content);
        expect($writer).toHaveValue(data.writer);
        expect($price).toHaveValue(data.price);
        expect($date).toHaveValue(data.publishDate);
        expect($isbn).toHaveValue(data.isbn);
        expect($borrow).toHaveValue(data.maxBorrowDay);
        expect($category).toHaveValue(data.categoryId);
      });
    });
  });

  context("도서 정보 수정", () => {
    it("3. 도서 정보 수정 저장", async () => {
      const {
        $title,
        $content,
        $writer,
        $price,
        $date,
        $isbn,
        $borrow,
        $category,
        $submit,
      } = await init();

      await userEvent.type($title, "Edit Book 1");
      await userEvent.type($content, "Lorem ipsum dolor sit amet");
      await userEvent.type($writer, "John Doe");
      await userEvent.type($price, "19");
      await userEvent.type($date, "2022-01-02");
      await userEvent.type($isbn, "1234567890");
      await userEvent.type($borrow, "7");
      await userEvent.type($category, "123456");

      await userEvent.click($submit);

      waitFor(() => {
        expect(push).toHaveBeenCalledTimes(1);
      });
    });
  });
});
