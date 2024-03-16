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
