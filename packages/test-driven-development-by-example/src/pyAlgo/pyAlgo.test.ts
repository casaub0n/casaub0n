import { strict as assert } from "assert";
import { test, todo } from "node:test";

import {
  getFirst,
  getSum,
  regExpObjectMethod,
  ConstractaWithOptionG,
  stringExpObjectMethod,
  LiteralWithOptionG,
  optionI_regExp,
  optionM_regExp,
  optionY_regExp,
  optionGI_regExp,
  metaRegExp,
  singleMatcher,
  singleMatcherGoption,
  continuedWordMatcher,
  continuedWordMatcherGoption,
  combineMatcherA,
  combineMatcherD,
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
  if (optionI_regExp) assert.deepStrictEqual(optionI_regExp[0], "ABC");
});

test('"ABC\\nDEF" much "D" by Option "m"', () => {
  if (optionM_regExp) assert.deepStrictEqual(optionM_regExp[0], "D");
});

test('By Option "y", Last index of "ABC" is 0', () => {
  assert.deepStrictEqual(optionY_regExp.lastIndex, 0);
});

test('By Option "y", the regexp much "ABC"', () => {
  assert.deepStrictEqual(optionY_regExp.test("ABC"), true);
});

test("When from second word", () => {
  optionY_regExp.lastIndex = 1;
  assert.deepStrictEqual(optionY_regExp.test("ABC"), false);
});

test('When from second word and Option "y", the regexp much "ABC"', () => {
  optionY_regExp.lastIndex = 1;
  const abcMatchResult = "ABC".match(optionY_regExp);
  if (abcMatchResult) assert.deepStrictEqual(abcMatchResult[0], "ABC");
});

test("combine g with i option", () => {
  if (optionGI_regExp) assert.deepStrictEqual(optionGI_regExp, ["ABC", "abc", "ABC"]);
});

test("it matchs meta char", () => {
  if (metaRegExp) assert.deepStrictEqual(metaRegExp, ["?", "?", "?"]);
});

test("it matchs single word", () => {
  if (singleMatcher) assert.deepStrictEqual(singleMatcher[0], "A");
});

test("it matchs single word with G Option", () => {
  if (singleMatcherGoption) assert.deepStrictEqual(singleMatcherGoption, ["A", "B", "C"]);
});

test("it matches continued word", () => {
  if (continuedWordMatcher) assert.deepStrictEqual(continuedWordMatcher[0], "AB");
});

test("it matches continued word with G Option", () => {
  if (continuedWordMatcherGoption) assert.deepStrictEqual(continuedWordMatcherGoption[0], "AB");
});

test('it matches "AB" by combine word matcher that\'s "ABCD"', () => {
  if (combineMatcherA) assert.deepStrictEqual(combineMatcherA[0], "AB");
});

test('it matches "CD" by combine word matcher that\'s "ABCD"', () => {
  if (combineMatcherD) assert.deepStrictEqual(combineMatcherD[0], "CD");
});

todo('["AB", "CD"]');
todo('["AB"]');
todo('["CD"]');
todo("null");
todo('["あ", " 1 ", "!", "?", "*", "/", "-", "_"]');
