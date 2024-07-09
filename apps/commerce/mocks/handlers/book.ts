import { http, HttpResponse, PathParams } from "msw";
import bookData from "../json/book.json";
import RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";

const bookMap = new Map<string, any>(Object.entries(bookData));

const book = [
  http.get<PathParams>(
    `${process.env.NEXT_PUBLIC_API_KEY}/book`,
    async ({ request }) => {
      try {
        const url = new URL(request.url);
        const productId = url.searchParams.get("id");

        if (productId)
          return HttpResponse.json(bookMap.get(productId), { status: 200 });

        throw new Error("productId is missing");
      } catch (e) {
        return HttpResponse.json("get fail", { status: 401 });
      }
    },
  ),
  http.get<PathParams>(
    `${process.env.NEXT_PUBLIC_API_KEY}/book/list`,
    async ({ request }) => {
      try {
        const url = new URL(request.url);
        const page = url.searchParams.get("page");
        const size = url.searchParams.get("size");
        if (page) {
          const pageSize = parseInt(size ?? "10");
          const start = (parseInt(page) - 1) * pageSize;
          const end = start + pageSize;
          const bookList = Array.from(bookMap.values()).slice(start, end);
          return HttpResponse.json(
            {
              list: bookList,
              pageUtil: {
                page: parseInt(page),
                size: pageSize,
                total: bookMap.size,
              },
            },
            { status: 200 },
          );
        }
        throw new Error("page is missing");
      } catch (e) {
        return HttpResponse.json("get fail", { status: 401 });
      }
    },
  ),
  http.post<PathParams, RegisterBookRequestDto>(
    `${process.env.NEXT_PUBLIC_API_KEY}/book/edit`,
    async ({ request }) => {
      try {
        const data = await request.json();

        bookMap.set(data.isbn, data);

        return HttpResponse.json({ status: 200 });
      } catch (e) {
        return HttpResponse.json("enroll fail", { status: 401 });
      }
    },
  ),
];

export default book;
