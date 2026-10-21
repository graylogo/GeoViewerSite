import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 正式线上地址（Netlify）。canonical link / OG URL / sitemap 都基于它生成，
// 换自定义域名时必须同步改这里，否则 SEO 会把规范化 URL 指向旧域名。
const SITE = 'https://geoviewersite.netlify.app';

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
