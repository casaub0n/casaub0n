// https://twitter.com/t_wada/status/904916106153828352
// コードには How
// テストコードには What
// コミットログには Why
// コードコメントには Why not
// を書こうという話をした

export const getFirst = <T>(myList: T[]) => {
  return myList[0];
};

export const getSum = (myList: number[]) => {
  let sum = 0;
  for (const item of myList) {
    sum = sum + item;
  }
  return sum;
};

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
