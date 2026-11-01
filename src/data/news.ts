export interface NewsItem { date: string; title: string; source: string; body?: string }
// 現行公式サイト掲載のお知らせ(2026年時点)。正式導入時に最新へ差し替え。
export const news: NewsItem[] = [
  { date: '2026-03-12', title: '合格大学を随時更新中です', source: '現行サイト掲載' },
  { date: '2026-02-01', title: '新年度入会者のチュートリアルを開始しました', source: '現行サイト掲載' },
];
