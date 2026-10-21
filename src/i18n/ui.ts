/**
 * 文案字典：默认中文。
 *
 * 英文页面尚未上线。接入方式（后续）：
 *   1. 在 src/pages/en/ 下复制同名页面，用 `t('en')` 取英文文案
 *   2. SiteHeader 的 LangSwitch 组件把 EN 换成指向 /en/... 的链接
 *   3. 需要时再抽出 useTranslations() 工具函数
 */

export const defaultLang = 'zh' as const;
export type Lang = 'zh' | 'en';

export const ui = {
  zh: {
    siteName: 'GeoViewer',
    tagline: '为照片找回正确的地点',
    navFeatures: '功能',
    navDownload: '下载',
    navChangelog: '更新日志',
    navDocs: '文档',
    ctaDownload: '下载',
    footerLocalOnly: '所有处理都在本机完成',
  },
  en: {
    // TODO: 英文页面上线时补齐
    siteName: 'GeoViewer',
    tagline: 'Put your photos back in the right place',
    navFeatures: 'Features',
    navDownload: 'Download',
    navChangelog: 'Changelog',
    navDocs: 'Docs',
    ctaDownload: 'Download',
    footerLocalOnly: 'Everything stays on your Mac',
  },
} satisfies Record<Lang, Record<string, string>>;

export function t(lang: Lang = defaultLang) {
  return ui[lang];
}
