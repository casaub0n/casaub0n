type Foo = {
  id: number;
  name: string;
};

/**
 * (TypeScript: satisfiesオペレーターの使い所のひとつとして - Qiita)[https://qiita.com/suin/items/1b74645158263d2fa9af]
 */
export const satisfiesExampleJson = JSON.stringify({ id: 1, name: "foo" } satisfies Foo);

export const myName = "casaub0n" as const satisfies string;

/**
 * https://zenn.dev/moneyforward/articles/typescript-as-const-satisfies
 */
export const foodList = {
  ramen: "ラーメン",
  udon: "うどん",
  soba: "そば",
} as const satisfies {
  [key: string]: string;
};
