import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import fs from "fs";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/ssr-options.html#ssr-noexternal
const noExternal: string[] = [
  // MUI needs to be pre-processed by Vite in both production and development for SSR
  "@mui/base",
  "@mui/icons-material",
  "@mui/material",
  "@mui/utils",
];

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/seller/",
  plugins: [
    react(),
    ssr(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
  ],
  ssr: {
    noExternal,
  }, 
  server: {
    https: {
      key: fs.readFileSync("./certs/localhost.key"),
      cert: fs.readFileSync("./certs/localhost.crt"),
    },
  },
  resolve: {
    alias: {
      // Ensure aliases use special characters at the start for compatibility with Vike (vite-plugin-ssr)
      // See https://vite-plugin-ssr.com/path-aliases#vite
      "~app": path.resolve(__dirname, "./src/app"),
      "~trigger": path.resolve(__dirname, "./src/app/trigger/ts")
    },
  },
});
