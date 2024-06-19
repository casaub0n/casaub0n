import { test, expect } from "vitest";

import { exhaustive, getFirst, getSum } from "./index";

test("the first number 1 in 1, 2, 3", () => {
  expect(getFirst([1, 2, 3])).toBe(1);
});

test("the first number 1 in 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", () => {
  expect(getFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1);
});

test("1 + 2 + 3 = 6", () => {
  expect(getSum([1, 2, 3])).toBe(6);
});

test("1 + 2 + 3 + 4 = 10", () => {
  expect(getSum([1, 2, 3, 4])).toBe(10);
});

test("exhaustiveness", () => {
  expect(exhaustive("a")).toBe("A");
});
