// regexp
export const regExpObjectMethod = (val: string) => {
  return /BC/.exec(val);
};

export const stringExpObjectMethod = (val: string) => {
  return val.match(/BC/);
};

export const ConstractaWithOptionG = new RegExp("ABC", "g");
export const LiteralWithOptionG = /ABC/g;

export const optionI_regExp = "ABC".match(/ABC/i);
export const optionM_regExp = "ABC\nDEF".match(/^D/m);

/**
 * y option is not enable in String Object
 */
export const optionY_regExp = /ABC/y;

/**
 * combine i and g option
 */
export const optionGI_regExp = "ABC_abc_ABC".match(/ABC/gi);

export const metaRegExp = "?!?!?!".match(/\?/g);

/**
 * single word
 */
export const singleMatcher = "ABC".match(/./);

/**
 * single word with g Option
 */
export const singleMatcherGoption = "ABC".match(/./g);

/**
 * continued word
 */
export const continuedWordMatcher = "ABC".match(/../);

/**
 * continued word with G Option
 */
export const continuedWordMatcherGoption = "ABC".match(/../g);

/**
 * combine word
 */
export const combineMatcherA = "ABCD".match(/A./);

/**
 * combine word
 */
export const combineMatcherD = "ABCD".match(/D./);
