import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssScss from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import eslint from 'vite-plugin-eslint';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '',
  css: {
    devSourcemap: true,
    postcss: {
      map: true,
      parser: postcssScss,
      plugins: [
        postcssNested({}),
        tailwindcss(),
        autoprefixer({}),
      ]
    }
  },
  plugins: [
    react(),
    eslint({
      useEslintrc: true,
    }),
  ],
});
