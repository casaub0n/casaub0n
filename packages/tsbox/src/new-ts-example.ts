/**
 * Template literals
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%83%AB%E5%9E%8B
 */
const requestExternalApi = async ({
  data,
}: {
  data: {
    offset: `${number}`;
    limit: `${number}`;
  };
}) => {
  const res = await fetch("https://example.com", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await res.json();
};

await requestExternalApi({
  data: {
    // `zero` is type error
    offset: `${0}`,
    // `ten` is type error
    limit: `${10}`,
  },
});

/**
 * `as const` and `satisfies`
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#as-const%E3%81%A8satisfies
 */
const localizeDataJP = {
  novel: {
    chapter: "チャプター",
    episode: "話",
  },
} as const satisfies {
  novel: {
    chapter: string;
    episode: string;
  };
};

// const chapter = localizeData_JP.novel.chapter;

/**
 * Recursive Type
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#%E5%86%8D%E5%B8%B0%E7%9A%84
 */
type RecursiveObj = { [key: string]: string | RecursiveObj };

type UnionWithDot<
  Prefix extends string,
  Key,
> = `${Prefix}${Prefix extends "" ? "" : "."}${Key extends string ? Key : ""}`;

type DotKeys<Obj extends RecursiveObj, Prefix extends string = ""> = {
  [Key in keyof Obj]: Obj[Key] extends object
    ? DotKeys<Obj[Key], UnionWithDot<Prefix, Key>>
    : UnionWithDot<Prefix, Key>;
}[keyof Obj];

const localize = (key: ExtractedDotKeys) => {
  const splittedKey = key.split(".");

  const stringOrObj = splittedKey.reduce<RecursiveObj | string>((obj, key) => {
    if (typeof obj === "string") {
      return obj;
    }

    return obj[key];
  }, localizeDataJP);
};

// novel.chap is type error
localize("novel.chapter");

export type ExtractedDotKeys = DotKeys<typeof localizeDataJP>;

export {};
