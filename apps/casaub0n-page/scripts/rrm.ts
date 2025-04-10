/**
 * rm command
 * @see https://qiita.com/munieru_jp/items/7131bb2617041388622d#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%82%92%E5%86%8D%E5%B8%B0%E7%9A%84%E3%81%AB%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95
 */

import fs from "node:fs";

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  await fs.promises.rm("../.next", { recursive: true, force: true });
})();
