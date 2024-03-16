import { test, expect } from "vitest";

import {
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

const INPUT_VALUE = "ABCDE";

test('"' + INPUT_VALUE + '" much "BC" by RegExp object\'s method', () => {
  const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) expect(resultRegExpExecArray[0]).toBe("BC");
});

test("The RegExpExecArray index is 1 by RegExp object's method", () => {
  const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) expect(resultRegExpExecArray.index).toBe(1);
});

test(
  'The input value is "' + INPUT_VALUE + "\" in the RegExpExecArray by RegExp object's method",
  () => {
    const resultRegExpExecArray = regExpObjectMethod(INPUT_VALUE);
    if (resultRegExpExecArray) expect(resultRegExpExecArray.input).toBe(INPUT_VALUE);
  },
);

test('"' + INPUT_VALUE + '" much "BC" by String object\'s method', () => {
  const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) expect(resultRegExpExecArray[0]).toBe("BC");
});

test("The RegExpExecArray index is 1 by String object's method", () => {
  const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpExecArray) expect(resultRegExpExecArray.index).toBe(1);
});

test(
  'The input value is "' + INPUT_VALUE + "\" in the RegExpExecArray by RegExp object's method",
  () => {
    const resultRegExpExecArray = stringExpObjectMethod(INPUT_VALUE);
    if (resultRegExpExecArray) expect(resultRegExpExecArray.input).toBe(INPUT_VALUE);
  },
);

test("Same result between RegExp object's method and String object's method", () => {
  const resultRegExpObjectMethod = regExpObjectMethod(INPUT_VALUE);
  const resultStringExpObjectMethod = stringExpObjectMethod(INPUT_VALUE);
  if (resultRegExpObjectMethod && resultStringExpObjectMethod)
    expect(resultRegExpObjectMethod).toStrictEqual(resultStringExpObjectMethod);
});

test('Search with "g" option by specify constracta', () => {
  const resultRegExp = "ABC_ABC_ABC".match(ConstractaWithOptionG);
  expect(resultRegExp).toStrictEqual(["ABC", "ABC", "ABC"]);
});

test('Search with "g" option by specify literal', () => {
  const resultRegExp = "ABC_ABC_ABC".match(LiteralWithOptionG);
  expect(resultRegExp).toStrictEqual(["ABC", "ABC", "ABC"]);
});

test('Same result between specify constracta and specify literal with "g" option', () => {
  const resultRegExpLiteral = "ABC_ABC_ABC".match(LiteralWithOptionG);
  const resultRegExpConstracta = "ABC_ABC_ABC".match(ConstractaWithOptionG);
  expect(resultRegExpLiteral).toStrictEqual(resultRegExpConstracta);
});

test('"ABC" much "ABC" by Option "i"', () => {
  if (optionI_regExp) expect(optionI_regExp[0]).toBe("ABC");
});

test('"ABC\\nDEF" much "D" by Option "m"', () => {
  if (optionM_regExp) expect(optionM_regExp[0]).toBe("D");
});

test('By Option "y", Last index of "ABC" is 0', () => {
  expect(optionY_regExp.lastIndex).toBe(0);
});

test('By Option "y", the regexp much "ABC"', () => {
  expect(optionY_regExp.test("ABC")).toBeTruthy;
});

test("When from second word", () => {
  optionY_regExp.lastIndex = 1;
  expect(optionY_regExp.test("ABC")).toBeFalsy;
});

test('When from second word and Option "y", the regexp much "ABC"', () => {
  optionY_regExp.lastIndex = 1;
  const abcMatchResult = "ABC".match(optionY_regExp);
  if (abcMatchResult) expect(abcMatchResult[0]).toBe("ABC");
});

test("combine g with i option", () => {
  if (optionGI_regExp) expect(optionGI_regExp).toStrictEqual(["ABC", "abc", "ABC"]);
});

test("it matchs meta char", () => {
  if (metaRegExp) expect(metaRegExp).toStrictEqual(["?", "?", "?"]);
});

test("it matchs single word", () => {
  if (singleMatcher) expect(singleMatcher[0]).toBe("A");
});

test("it matchs single word with G Option", () => {
  if (singleMatcherGoption) expect(singleMatcherGoption).toStrictEqual(["A", "B", "C"]);
});

test("it matches continued word", () => {
  if (continuedWordMatcher) expect(continuedWordMatcher[0]).toBe("AB");
});

test("it matches continued word with G Option", () => {
  if (continuedWordMatcherGoption) expect(continuedWordMatcherGoption[0]).toBe("AB");
});

test('it matches "AB" by combine word matcher that\'s "ABCD"', () => {
  if (combineMatcherA) expect(combineMatcherA[0]).toBe("AB");
});

test('it matches "CD" by combine word matcher that\'s "ABCD"', () => {
  if (combineMatcherD) expect(combineMatcherD[0]).toBe("CD");
});

test.todo('["AB", "CD"]');
test.todo('["AB"]');
test.todo('["CD"]');
test.todo("null");
test.todo('["あ", " 1 ", "!", "?", "*", "/", "-", "_"]');
