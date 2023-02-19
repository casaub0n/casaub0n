import { Money } from "./money";

export class Franc extends Money {
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  // equals(object: Franc): boolean {
  //   const franc = object;
  //   return this.amount === franc.amount;
  // }
}

export const multiCurrency = () => {};
