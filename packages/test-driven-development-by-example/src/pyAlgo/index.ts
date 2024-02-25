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

export const specifyConstracta = new RegExp("ABC", "g");
export const specifyLiteral = /ABC/g;
