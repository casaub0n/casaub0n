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

/**
 * satisfies で exhaustiveness check
 */
type A = "a" | "b" | "c";

export function exhaustive(v: A) {
  switch (v) {
    case "a":
      return "A";
    case "b":
      return "B";
    case "c":
      return "C";
    default:
      return v satisfies never; // check exhaustiveness
  }
}
