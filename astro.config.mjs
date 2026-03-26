// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://joseprograming25.github.io',
  base: '/sistema-ada-blog-',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
