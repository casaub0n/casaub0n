import { strict as assert } from "assert";
import { test } from "node:test";

import {
  getFirst,
  getSum,
  regExpObjectMethod,
  specifyConstracta,
  stringExpObjectMethod,
} from "./index";

test("head number in Array", () => {
  assert.deepStrictEqual(getFirst([1, 2, 3]), 1);
  assert.deepStrictEqual(getFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1);
});

test("sum total", () => {
  assert.deepStrictEqual(getSum([1, 2, 3]), 6);
  assert.deepStrictEqual(getSum([1, 2, 3, 4]), 10);
});

test("Use RegExp object's method", () => {
  const resultRegExpExecArray = regExpObjectMethod("ABCDE");
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray[0], "BC");
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.index, 1);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.input, "ABCDE");
});

test("Use String object's method", () => {
  const resultRegExpExecArray = stringExpObjectMethod("ABCDE");
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray[0], "BC");
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.index, 1);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.input, "ABCDE");
});

test("Same result between RegExp object's method and String object's method", () => {
  const resultRegExpObjectMethod = regExpObjectMethod("ABCDE");
  const resultStringExpObjectMethod = stringExpObjectMethod("ABCDE");
  if (resultRegExpObjectMethod && resultStringExpObjectMethod)
    assert.deepStrictEqual(resultRegExpObjectMethod, resultStringExpObjectMethod);
});

test('search with "g" option', () => {
  const resultRegExp = "ABC_ABC_ABC".match(specifyConstracta);
  assert.deepStrictEqual(resultRegExp, ["ABC", "ABC", "ABC"]);
});
