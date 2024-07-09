import { http, passthrough } from "msw";

const common = [
  http.get("*", async ({ request }) => {
    if (!request.headers.get("x-msw-intention")) {
      return passthrough();
    }
  }),
];

export default common;
