const nav = [
  ['features.html', '10の特徴'], ['curriculum.html', '講座紹介'], ['tutorial.html', 'チュートリアル'], ['results.html', '合格大学'], ['tuition.html', '受講費'], ['flow.html', '入会の流れ'], ['faq.html', 'よくある質問'], ['access.html', 'アクセス'],
];
export const TEL = '050-1807-5768'; // 現行サイト記載。要確認
export function headerHTML(cur: string): string {
  return `<div class="demo-bar">非公式リニューアル提案デモ(イーズ予備校の公式サイトではありません)</div>
  <div class="bar wrap"><a class="logo" href="index.html" aria-label="イーズ予備校(仮ロゴ) トップへ"><span class="logo-mark" aria-hidden="true">e</span>イーズ予備校</a>
  <button class="menu-btn" aria-expanded="false" aria-controls="gnav">メニュー</button>
  <nav id="gnav" aria-label="メインメニュー"><ul>${nav.map(([u, t]) => `<li><a href="${u}"${cur === u ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}<li><a class="btn btn--sm" href="contact.html">お問合せ</a></li></ul></nav></div>`;
}
export function footerHTML(): string {
  return `<div class="wrap foot"><div><p class="logo">イーズ予備校</p><p>茨城県つくば市竹園3-18-2 竹園ショッピングセンター2階<br>理系専門・浪人生対象の予備校<br>電話 ${TEL}(現行サイト記載・要確認)</p></div>
  <ul>${[...nav, ['greet.html', '代表挨拶'], ['contact.html', 'お問合せ']].map(([u, t]) => `<li><a href="${u}">${t}</a></li>`).join('')}</ul>
  <p class="demo-note">このサイトは提案用の非公式デモです。掲載内容は現行公式サイト(2026年時点)の情報をもとにしています。最新情報は必ず予備校へご確認ください。法的表示は正式導入時に確認のうえ追加します。</p></div>`;
}
export const stickyCTA = '<a class="sticky-cta" href="contact.html">個別説明会について相談する</a>';
export const menuScript = `<script>(function(){var h=document.getElementById('site-header'),b=h&&h.querySelector('.menu-btn');if(!b)return;document.documentElement.classList.add('js');b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));h.classList.toggle('open',!o)})})()</script>`;
export const motionScript = `<script>(function(){var e=Array.prototype.slice.call(document.querySelectorAll('main section .wrap>*, .page-head .wrap>*'));var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(r||!('IntersectionObserver' in window))return;document.documentElement.classList.add('motion');e.forEach(function(n,i){n.classList.add('reveal')});var o=new IntersectionObserver(function(t){t.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});e.forEach(function(n){o.observe(n)})})()</script>`;
