import { test, expect, describe } from "vitest";

import {
  isPositive,
  userName,
  sumOfPos,
  myFilter,
  isPositiveFunc,
  getSpeed,
} from "./typeExercises";

import type { PartialUser } from "./typeExercises";

test("0 or more is true", () => {
  expect(isPositive(3)).toBe(true);
});

test("Object type makes User object", () => {
  /**
   * @see 復習: 関数型から引数の型や返り値の型を取り出す方法 https://zenn.dev/uhyo/articles/typescript-overload-infer#%E5%BE%A9%E7%BF%92%3A-%E9%96%A2%E6%95%B0%E5%9E%8B%E3%81%8B%E3%82%89%E5%BC%95%E6%95%B0%E3%81%AE%E5%9E%8B%E3%82%84%E8%BF%94%E3%82%8A%E5%80%A4%E3%81%AE%E5%9E%8B%E3%82%92%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99%E6%96%B9%E6%B3%95
   * @see タプルへのアクセス https://typescriptbook.jp/reference/values-types-variables/tuple#%E3%82%BF%E3%83%97%E3%83%AB%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9
   */
  const personA = { name: "B", age: 18, private_: false } satisfies Parameters<typeof userName>[0];
  expect(userName(personA)).toBe("B");
});

test("0 or more is true, otherwise false", () => {
  expect(isPositiveFunc(5)).toBe(true);
  expect(isPositiveFunc(-1)).toBe(false);
});

test("0 or more number summation", () => {
  expect(sumOfPos([1, 3, -2, 0])).toBe(4);
});

test("make a double number's array", () => {
  expect(myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0)).toEqual([2, 4]);
});

test("each velocities level answer actual mount", () => {
  expect(getSpeed("slow")).toBe(10);
  expect(getSpeed("medium")).toBe(50);
  expect(getSpeed("fast")).toBe(200);
});

describe("Advenced Type", () => {
  test("User is optional", () => {
    const user: PartialUser = { name: "Optional太郎" };
    expect(user.name).toBe("Optional太郎");
  });
});
