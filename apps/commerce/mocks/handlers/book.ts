import { http, HttpResponse, PathParams } from "msw";
import bookData from "../json/book.json";
import RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";

const bookMap = new Map<string, any>(Object.entries(bookData));

const book = [
  http.get<PathParams>(
    `${process.env.NEXT_PUBLIC_API_KEY}/book-comm`,
    async ({ request }) => {
      try {
        console.log("get all");
        const url = new URL(request.url);
        const productId = url.searchParams.get("id");

        console.log(productId);
        if (productId)
          return HttpResponse.json(bookMap.get(productId), { status: 200 });
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
