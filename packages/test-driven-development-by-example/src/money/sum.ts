import type Bank from "./bank";
import type Expression from "./expression";
import Money from "./money";

export class Sum implements Expression {
  readonly #__augend: Expression;
  readonly #__addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.#__augend = augend;
    this.#__addend = addend;
  }

  public times(multiplier: number): Expression {
    return new Sum(this.#__augend.times(multiplier), this.#__addend.times(multiplier));
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
    const amount = this.#__augend.reduce(bank, to).amount + this.#__addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  get augend() {
    return this.#__addend;
  }

  get addend() {
    return this.#__addend;
  }
}
