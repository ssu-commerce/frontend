import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";
import { render } from "./server/router.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    hmr: true,
    appType: "custom",
  });

  app.use(vite.httpServer);

  app.use("*", async (req, res) => {
    try {
      console.log(req);
      // let template = fs.readFileSync(path.resolve(__dirname, "index.html")),
      // console.log(render);

      // template = await vite.transformIndexHtml(url, tmeplate);

      const { render } = await vite.ssrLoadModule("/router.js");

      await render(req.url, res);

      // const html = template.replace(`<!-- ssr-outlet-->`, appHtml);

      // console.log(html);

      // res.status(200).set({ "Content-type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);

      console.log(e);

      next(e);
    }
  });

  app.listen(5173);
}

createServer();
