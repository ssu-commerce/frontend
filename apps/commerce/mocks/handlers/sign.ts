import type { SignInRq } from "app/(main)/sign-in/page";
import type { SignUpRq } from "app/(main)/sign-up/page";
import { http, HttpResponse, passthrough, PathParams } from "msw";

const signIn = [
  http.post<PathParams, SignInRq>(
    `${process.env.NEXT_PUBLIC_API_KEY}/sign-in`,
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id === "test" && password === "1234") {
        return HttpResponse.json(
          {
            accessToken: "accessToken 123",
          },
          { status: 200 },
        );
      }

      return HttpResponse.json("login fail", { status: 401 });
    },
  ),
  http.post<PathParams, SignUpRq>(
    `${process.env.NEXT_PUBLIC_API_KEY}/sign-up`,
    async ({ request }) => {
      const { id, password, confirmPassword } = await request.json();

      if (id === "duplicate") {
        return HttpResponse.json("duplicate name", { status: 500 });
      } else if (password !== confirmPassword) {
        return HttpResponse.json("not match password", { status: 500 });
      }

      return HttpResponse.json({}, { status: 200 });
    },
  ),
];

export default signIn;
