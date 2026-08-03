import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

describe("build output snapshot testing", () => {
  test("dist/index.mjs should not change", () => {
    const code = readFileSync(resolve(process.cwd(), "dist/index.mjs"), "utf8");

    expect(code).toMatchSnapshot();
  });
});

// import { readFileSync } from "node:fs";
// import { parse } from "acorn";
// import { describe, expect, test } from "vitest";

// describe("build output", () => {
//   test("generated JS is unchanged", () => {
//     const code = readFileSync("dist/index.mjs", "utf8");

//     const ast = parse(code, {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     });

//     expect(ast).toMatchSnapshot();
//   });
// });
