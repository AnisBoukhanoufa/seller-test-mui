import { jsx } from "react/jsx-runtime.js";
import ReactDOMServer from "react-dom/server.js";
import React__default from "react";
import { P as PageContextProvider } from "../chunks/chunk-e3fe5c1b.js";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const index = "";
function PageShell({
  children,
  pageContext
}) {
  return /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "COD TOOP";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <link rel="icon" href="" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <meta name="description" content="', '" />\n        <title>', '</title>\n        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">\n        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">\n        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>\n     \n        </head>\n      <body>\n        <div id="react-root">', "</div>\n      </body>\n    </html>"])), desc, title, dangerouslySkipEscape(pageHtml));
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
