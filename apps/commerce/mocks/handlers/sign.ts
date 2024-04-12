import { http, HttpResponse, PathParams } from "msw";

interface SignInDto {
  id: string;
  password: string;
}

const signIn = [
  http.post<PathParams, SignInDto>(
    `${process.env.NEXT_PUBLIC_API_KEY}/sign-in`,
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id === "test" && password === "1234") {
        return HttpResponse.json(
          {
            accessToken: "123",
          },
          { status: 200 },
        );
      }

      return HttpResponse.json(
        {
          message: "login fail",
        },
        { status: 500 },
      );
    },
  ),
  http.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-up`, ({}) => {
    return HttpResponse.json();
  }),
];

export default signIn;
