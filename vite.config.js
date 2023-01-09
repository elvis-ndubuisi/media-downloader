import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "privacy-policy": resolve(__dirname, "privacy-policy/index.html"),
        "terms-of-services": resolve(__dirname, "terms-of-services/index.html"),
      },
    },
  },
});
