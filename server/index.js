// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

import express from "express";
import compression from "compression";
import { renderPage } from "vite-plugin-ssr/server";
import { root } from "./root.js";
const isProduction = process.env.NODE_ENV === "production";

Error.stackTraceLimit = Infinity;

startServer();

async function startServer() {
  const app = express();

  app.use(compression());

  // Add this for Vercel deployment
  const port = process.env.PORT || 3000;
  const host = "0.0.0.0";

  if (isProduction) {
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // Use a middleware function instead of app.get()
  app.use(async (req, res, next) => {
    try {
      // Skip non-GET requests
      if (req.method !== "GET") return next();

      const pageContextInit = {
        urlOriginal: req.originalUrl,
      };
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      if (!httpResponse) return next();
      const { body, statusCode, earlyHints, headers } = httpResponse;

      if (res.writeEarlyHints)
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      if (headers) {
        headers.forEach(([name, value]) => res.setHeader(name, value));
      }
      res.status(statusCode).send(body);
    } catch (error) {
      console.error("Error rendering page:", error);
      res.status(500).send("Internal Server Error: " + error.message);
    }
  });

  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
