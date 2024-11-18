import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    manifest: true,
    outDir: 'public/assets',
    rollupOptions: {
      input: {
        bootstrap: resolve(__dirname, 'resources/js/bootstrap'),
      },
      output: {
        entryFileNames: (chunk) => {
          return '[name]-[hash].js';
        },
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      },
    },
    copyPublicDir: false,
  },
});
