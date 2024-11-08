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

export {};
