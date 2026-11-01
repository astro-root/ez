import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'node:path';
import { headerHTML, footerHTML, stickyCTA, menuScript, motionScript } from './src/layout';
import { ImagePlaceholder } from './src/ImagePlaceholder';
import { news } from './src/data/news';
const pages = ['index', 'features', 'curriculum', 'tutorial', 'results', 'tuition', 'flow', 'faq', 'access', 'contact', 'greet'];
const attr = (s: string, k: string) => new RegExp(`data-${k}="([^"]*)"`).exec(s)?.[1];
// ビルド時にHTMLへ静的に埋め込む(JS不要・file://でも表示可能)
const prerender = (): Plugin => ({
  name: 'prerender',
  transformIndexHtml: { order: 'pre', handler(html, ctx) {
    const cur = ctx.path.split('/').pop() || 'index.html';
    return html
      .replace('<div id="site-header"></div>', `<div id="site-header">${headerHTML(cur)}</div>`)
      .replace('<div id="site-footer"></div>', `<div id="site-footer">${footerHTML()}</div>`)
      .replace(/<div data-ph ([^>]*)><\/div>/g, (_, a) => ImagePlaceholder({ purpose: attr(a, 'purpose') ?? '', description: attr(a, 'desc') ?? '', ratio: attr(a, 'ratio'), note: attr(a, 'note'), tone: attr(a, 'tone') as 'mint' | 'sand' | 'navy' | 'clay' | undefined }))
      .replace(/<ul class="news" data-news="(\d+)"><\/ul>/, (_, n) => `<ul class="news">${news.slice(0, Number(n) || news.length).map((i) => `<li><time datetime="${i.date}">${i.date.replace(/-/g, '.')}</time>${i.body ? `<details><summary>${i.title}</summary><p>${i.body}</p></details>` : `<span>${i.title}</span>`}<em>${i.source}</em></li>`).join('')}</ul>`)
      .replace(/<script type="module" src="\/src\/main.ts"><\/script>/, '')
      .replace('</body>', `${stickyCTA}${menuScript}${motionScript}</body>`);
  } },
});
const fileSafe = (): Plugin => ({ name: 'file-safe', transformIndexHtml: { order: 'post', handler: (h) => h.replace(/ crossorigin/g, '') } });
export default defineConfig({
  base: './',
  plugins: [prerender(), fileSafe()],
  build: { rollupOptions: { input: Object.fromEntries(pages.map((p) => [p, resolve(__dirname, `${p}.html`)])) } },
});
