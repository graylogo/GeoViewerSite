# GeoViewerSite

GeoViewer 的官方静态网站。Astro + Tailwind CSS 构建，纯静态输出，部署在 Netlify。

## 技术栈

- **Astro**（`output: 'static'`）：所有页面在构建期生成 HTML
- **Tailwind CSS v4**：通过 `@tailwindcss/vite` 接入，入口是 `src/styles/global.css`
- **TypeScript**：仅用于类型与文案字典，页面里没有前端框架
- 没有 React / Vue / jQuery；需要交互时再加 Astro island + 原生 TS

## 目录

```
GeoViewerSite/
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
├── package.json
├── tsconfig.json
├── public/
│   ├── icon.png          # 站点图标（由 AppIcon.png 缩到 512）
│   └── og.png            # OG 占位图（1200×630），之后替换为真实截图
└── src/
    ├── components/       # Hero / FeatureSection / DownloadCard / ChangelogList / PricingOrLicense / SiteHeader / SiteFooter / LangSwitch
    ├── data/release.json # 版本真相：version / date / dmg / sha256 / min_macos
    ├── i18n/ui.ts        # 文案字典，默认中文，预留英文
    ├── layouts/BaseLayout.astro
    ├── pages/            # index / features / download / changelog / docs / privacy
    └── styles/global.css
```

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 输出到 dist/
npm run preview    # 预览构建产物
```

## 部署

Netlify 监听本仓库 `main` 分支自动部署，配置见 `netlify.toml`：

- build command: `npm run build`
- publish: `dist`
- NODE_VERSION: `20`

首次上线需要在 Netlify 后台「Import from Git」关联仓库，之后不要再手动执行 Netlify CLI。

## 发版要改的地方

版本号、日期、DMG 链接与 SHA-256 都写在 `src/data/release.json`，页面全部从这里读取：

1. 改 `src/data/release.json`
2. 在 `src/pages/changelog.astro` 顶部追加一条记录（最新的放最上面）
3. 提交到 `main`，Netlify 自动部署

## 待办

- `public/og.png` 换成真实的产品截图
- 英文页面（`src/pages/en/*`）+ `LangSwitch` 接通
- 文档页搜索（Astro island + 原生 TS）
