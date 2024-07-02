

const array = ["hoge", ["fuga", 0], []];

export const flatArray = array.flatMap((data) => {
  return data;
});

const nullableArray: Array<string | null> = ["hoge", null, "fuga"];

/**
 * (【TypeScript】配列の型を絞り込むときはflatMapがおすすめ)[https://qiita.com/suin/items/1b74645158263d2fa9af]
 */
export const filterArray = nullableArray.flatMap((data) => {
  return data ?? [];
});
