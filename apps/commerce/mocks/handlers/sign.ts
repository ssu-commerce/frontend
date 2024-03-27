import { http, HttpResponse } from "msw";

const signIn = [
  http.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-in`, () => {
    return HttpResponse.json({
      accessToken: "123",
    });
  }),
  http.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-up`, () => {
    return HttpResponse.json();
  }),
];

export default signIn;
