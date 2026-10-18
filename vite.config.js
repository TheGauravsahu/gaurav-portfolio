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
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/gsap")) {
            return "vendor-gsap";
          }
          if (id.includes("node_modules/lenis")) {
            return "vendor-scroll";
          }
        },
      },
    },
  },
});
