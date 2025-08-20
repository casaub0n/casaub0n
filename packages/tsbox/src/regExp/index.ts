/* eslint-disable @typescript-eslint/explicit-function-return-type */

// regexp
export const regExpObjectMethod = (value: string) => {
  return /BC/.exec(value);
};

export const stringExpObjectMethod = (value: string) => {
  return value.match(/BC/);
};

export const ConstructorWithOptionG = new RegExp("ABC", "g");
export const LiteralWithOptionG = /ABC/g;

export const optionIRegExp = "ABC".match(/abc/i);
export const optionMRegExp = "ABC\nDEF".match(/^D/m);

/**
 * y option is not enable in String Object
 */
export const optionYRegExp = /ABC/y;

/**
 * combine i and g option
 */
export const optionGIRegExp = "ABC_abc_ABC".match(/abc/gi);

export const metaRegExp = "?!?!?!".match(/\?/g);

/**
 * single word
 */
export const singleMatcher = "ABC".match(/./);

/**
 * single word with g Option
 */
export const singleMatcherGOption = "ABC".match(/./g);

/**
 * continued word
 */
export const continuedWordMatcher = "ABC".match(/../);

/**
 * continued word with G Option
 */
export const continuedWordMatcherGOption = "ABC".match(/../g);

/**
 * combine word
 */
export const combineMatcherA = "ABCD".match(/A./);

/**
 * combine word
 */
export const combineMatcherD = "ABCD".match(/D./);
