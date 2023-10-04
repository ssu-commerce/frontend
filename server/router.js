import { renderToPipableStream } from "react";

let assetMap = {
  "reset.css": "/public/reset.css",
};

export function render(url, res) {
  const { pipe } = renderToPipableStream(<App assetMap={assetMap} />, {
    bootstrapScripts: [],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      res.statusCode = 200;
      pipe(res);
    },
  });
}
