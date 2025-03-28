const array = ["foo", ["bar", 0], []];

export const flatArray = array.flatMap((data) => {
  return data;
});

// eslint-disable-next-line unicorn/no-null
const nullableArray: Array<string | null> = ["foo", null, "bar"];

/**
 * (【TypeScript】配列の型を絞り込むときはflatMapがおすすめ)[https://qiita.com/suin/items/1b74645158263d2fa9af]
 */
export const filterArray = nullableArray.flatMap((data) => {
  return data ?? [];
});
