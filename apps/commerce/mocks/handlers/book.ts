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
        console.log(
          "-------------------------------- mocking fetch /book --------------------------------",
          url,
        );
        const productId = url.searchParams.get("id");
        if (productId)
          return HttpResponse.json(bookMap.get(productId), { status: 200 });
      } catch (e) {
        return HttpResponse.json("get fail", { status: 401 });
      }
    },
  ),
  // 테스트용 임시 API
  http.get<PathParams>(
    `${process.env.NEXT_PUBLIC_API_KEY}/book/edit/1`,
    async ({ request }) => {
      try {
        const url = new URL(request.url);
        console.log(
          "-------------------------------- Mocking : handle book - /book/edit/1 --------------------------------",
          url,
        );
        // 그냥 통과시켰을 때 refresh가 발생하지 않고, SPA가 정상적으로 동작한다. 근데 주석을 제거하니 새로고침이 일어난다 이건 어떻게 이런일이?
        return HttpResponse.json("mocking /book/edit/1", { status: 200 });
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
