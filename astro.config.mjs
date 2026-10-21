import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: 换成正式域名（Netlify 自定义域或 xxx.netlify.app）
const SITE = 'https://geoviewer.netlify.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // 纯静态：HTML + 资源，交由 Netlify 直接托管
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
