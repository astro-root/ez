export interface PlaceholderOptions {
  purpose: string; // 画像の用途(左上のタグに表示)
  description: string; // 挿入予定の画像の内容(中央に表示。「/」または改行で2行に分割)
  ratio?: string; // 例: "4 / 5"(CSSクラス r-4-5 に対応)
  note?: string; // 補足(構図など)
  tone?: 'mint' | 'sand' | 'navy' | 'clay'; // 背景トーン(ページ内でリズムをつける)
}
const esc = (t: string) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
export function ImagePlaceholder(o: PlaceholderOptions): string {
  const r = (o.ratio ?? '4 / 3').replace(/\s*\/\s*/, '-');
  const label = (o.ratio ?? '4 / 3').replace(/\s/g, '').replace('/', ':');
  return `<figure class="ph ph--${o.tone ?? 'mint'} r-${esc(r)}" role="img" aria-label="画像挿入予定: ${esc(o.description)}"><span class="ph__tag">${esc(o.purpose)}</span><figcaption><strong class="ph__title">${esc(o.description)}</strong>${o.note ? `<span class="ph__note">${esc(o.note)}</span>` : ''}</figcaption><span class="ph__ratio">${label}</span></figure>`;
}
