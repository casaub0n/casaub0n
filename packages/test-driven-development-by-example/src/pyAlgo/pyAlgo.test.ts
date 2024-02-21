import { strict as assert } from "assert";
import { test } from "node:test";

import { getFirst, getSum } from "./index";

test("head number in Array", () => {
  assert.deepEqual(getFirst([1, 2, 3]), 1);
  assert.deepEqual(getFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1);
});

test("sum total", () => {
  assert.deepEqual(getSum([1, 2, 3]), 6);
  assert.deepEqual(getSum([1, 2, 3, 4]), 10);
});
