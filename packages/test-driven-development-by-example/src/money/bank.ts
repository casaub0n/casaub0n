import type Expression from "./expression";
import type Money from "./money";

type Rate = {
  pair: [string, string];
  rate: number;
};

export default class Bank {
  /**
   * Under the covers, these auto-accessors “de-sugar” to a get and set accessor with an unreachable private property.
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#auto-accessors-in-classes
   */
  #__rates: Rate | undefined;

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public rate(from: string, to: string): number {
    if (from === to) return 1;
    const rate = this.#__rates?.rate;
    if (rate) return rate;
    return 1; // if no setting
  }

  public addRate(from: string, to: string, rate: number): void {
    this.#__rates = {
      pair: [from, to],
      rate,
    };
  }
}
