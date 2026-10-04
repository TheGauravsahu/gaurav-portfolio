import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import listeningHandler from "./api/listening.js";

function listeningApiPlugin() {
  return {
    name: "listening-api",
    configureServer(server) {
      server.middlewares.use("/api/listening", async (request, response, next) => {
        const headers = {};
        let statusCode = 200;
        let body;
        const apiResponse = {
          setHeader(name, value) {
            headers[name] = value;
          },
          status(code) {
            statusCode = code;
            return this;
          },
          json(value) {
            body = value;
            return this;
          },
        };

        try {
          await listeningHandler(request, apiResponse);
          response.writeHead(statusCode, headers);
          response.end(JSON.stringify(body));
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [listeningApiPlugin(), react(), tailwindcss()],
});
