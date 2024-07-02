/**
 * TypeScript: オーバーロード関数の可読性をちょっとだけ高くする書き方 - Qiita
 * https://qiita.com/suin/items/2653fea448fd6246437a
 */
export function isFutureDate(
  ...args: [year: number, month: number, day: number] | [date: Date] | [isoDateString: string]
): boolean {
  if (args.length === 3) {
    const [year, month, day] = args;
    return new Date(year, month, day) > new Date();
  }
  const dateOrString = args[0];
  if (dateOrString instanceof Date) {
    return dateOrString > new Date();
  }
  return new Date(dateOrString) > new Date();
}
