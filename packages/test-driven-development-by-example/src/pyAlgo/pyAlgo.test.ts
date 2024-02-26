import { strict as assert } from "assert";
import { test, todo } from "node:test";

import {
  getFirst,
  getSum,
  regExpObjectMethod,
  ConstractaWithOptionG,
  stringExpObjectMethod,
  LiteralWithOptionG,
  regExpOptionI,
  regExpOptionM,
  regExpOptionY,
} from "./index";

test("the first number 1 in 1, 2, 3", () => {
  assert.deepStrictEqual(getFirst([1, 2, 3]), 1);
});

test("the first number 1 in 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", () => {
  assert.deepStrictEqual(getFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1);
});

test("1 + 2 + 3 = 6", () => {
  assert.deepStrictEqual(getSum([1, 2, 3]), 6);
});

test("1 + 2 + 3 + 4 = 10", () => {
  assert.deepStrictEqual(getSum([1, 2, 3, 4]), 10);
});

const INPUT_VALUE = "ABCDE";

test('"' + INPUT_VALUE + '" much "BC" by RegExp object\'s method', () => {
  const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray[0], "BC");
});

test("The RegExpExecArray index is 1 by RegExp object's method", () => {
  const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.index, 1);
});

test(
  'The input value is "' + INPUT_VALUE + "\" in the RegExpExecArray by RegExp object's method",
  () => {
    const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
    if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.input, INPUT_VALUE);
  },
);

test('"' + INPUT_VALUE + '" much "BC" by String object\'s method', () => {
  const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray[0], "BC");
});

test("The RegExpExecArray index is 1 by String object's method", () => {
  const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.index, 1);
});

test(
  'The input value is "' + INPUT_VALUE + "\" in the RegExpExecArray by RegExp object's method",
  () => {
    const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
    if (resultRegExpExecArray) assert.deepStrictEqual(resultRegExpExecArray.input, INPUT_VALUE);
  },
);

test("Same result between RegExp object's method and String object's method", () => {
  const resultRegExpObjectMethod = regExpObjectMethod(INPUT_VALUE);
  const resultStringExpObjectMethod = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpObjectMethod && resultStringExpObjectMethod)
    assert.deepStrictEqual(resultRegExpObjectMethod, resultStringExpObjectMethod);
});

test('Search with "g" option by specify constracta', () => {
  const resultRegExp = "ABC_ABC_ABC".match(ConstractaWithOptionG);
  assert.deepStrictEqual(resultRegExp, ["ABC", "ABC", "ABC"]);
});

test('Search with "g" option by specify literal', () => {
  const resultRegExp = "ABC_ABC_ABC".match(LiteralWithOptionG);
  assert.deepStrictEqual(resultRegExp, ["ABC", "ABC", "ABC"]);
});

test('Same result between specify constracta and specify literal with "g" option', () => {
  const resultRegExpLiteral = "ABC_ABC_ABC".match(LiteralWithOptionG);
  const resultRegExpConstracta = "ABC_ABC_ABC".match(ConstractaWithOptionG);
  assert.deepStrictEqual(resultRegExpLiteral, resultRegExpConstracta);
});

test('"ABC" much "ABC" by Option "i"', () => {
  if (regExpOptionI) assert.deepStrictEqual(regExpOptionI[0], "ABC");
});

test('"ABC\\nDEF" much "D" by Option "m"', () => {
  if (regExpOptionM) assert.deepStrictEqual(regExpOptionM[0], "D");
});

test('By Option "y", Last index of "ABC" is 0', () => {
  assert.deepStrictEqual(regExpOptionY.lastIndex, 0);
});

test('By Option "y", the regexp much "ABC"', () => {
  assert.deepStrictEqual(regExpOptionY.test("ABC"), true);
});

test("When from second word", () => {
  regExpOptionY.lastIndex = 1;
  assert.deepStrictEqual(regExpOptionY.test("ABC"), false);
});

test('When from second word and Option "y", the regexp much "ABC"', () => {
  regExpOptionY.lastIndex = 1;
  const hoge = "ABC".match(regExpOptionY);
  if (hoge) assert.deepStrictEqual(hoge[0], "ABC");
});

todo("combine g and i option");

todo("match meta char");
