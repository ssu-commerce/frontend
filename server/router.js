import { renderToPipableStream } from "react";

let assetMap = {
  "reset.css": "/public/reset.css",
};

module.exports = function render(url, res) {
  const { pipe } = renderToPipableStream(<App assetMap={assetMap} />, {
    bootstrapScripts: [],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
  res.send("router");
};
