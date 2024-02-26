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

export const regExpOptionI = "ABC".match(/ABC/i);
export const regExpOptionM = "ABC\nDEF".match(/^D/m);

/**
 * y option is not enable in String Object
 */
export const regExpOptionY = /ABC/y;
