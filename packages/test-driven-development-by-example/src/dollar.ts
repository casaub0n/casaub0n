import { Money } from "./money";

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  // equals(object: Dollar): boolean {
  //   const dollar = object;
  //   return this.amount === dollar.amount;
  // }
}

export const multiCurrency = () => {};
