export type User = {
  id: number;
  name: string;
  isActive: boolean;
  role: "admin" | "member" | "guest";
  emailVerified: boolean;
};

/**
 * [【TypeScript】条件分岐のベストプラクティス ── ネスト・switch・フラグ引数を卒業しよう #初心者 - Qiita](https://qiita.com/Nao52/items/38757bc86c30f0326519)
 * @see [❌ NG: ネストが深いコード](https://qiita.com/Nao52/items/38757bc86c30f0326519#-ng-%E3%83%8D%E3%82%B9%E3%83%88%E3%81%8C%E6%B7%B1%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89)
 */
export function badCanAccessDashboard(user: User | null): boolean {
  // eslint-disable-next-line no-negated-condition
  if (user !== null) {
    if (user.isActive) {
      if (user.emailVerified) {
        if (user.role === "admin") {
          return true;
          // eslint-disable-next-line no-else-return
        } else {
          // eslint-disable-next-line no-lonely-if
          if (user.role === "member") {
            return true;
            // eslint-disable-next-line no-else-return
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * [【TypeScript】条件分岐のベストプラクティス ── ネスト・switch・フラグ引数を卒業しよう #初心者 - Qiita](https://qiita.com/Nao52/items/38757bc86c30f0326519)
 * @see [✅ OK: 早期リターンで解消](https://qiita.com/Nao52/items/38757bc86c30f0326519#-ok-%E6%97%A9%E6%9C%9F%E3%83%AA%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E8%A7%A3%E6%B6%88)
 */
export function goodCanAccessDashboard(user: User | null): boolean {
  if (user === null) return false;
  if (!user.isActive) return false;
  if (!user.emailVerified) return false;
  return user.role === "admin" || user.role === "member";
}
