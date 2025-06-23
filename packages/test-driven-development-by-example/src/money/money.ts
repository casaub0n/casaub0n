import type Expression from "./expression";
import type Bank from "./bank";
import { Sum } from "./sum";

/**
 * @see https://refactoring.guru/design-patterns/factory-method
 */
export default class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * amount * multiplier
   */
  public times(multiplier: number): Expression {
    return new Money(this._amount * multiplier, this._currency);
  }

  public plus(addend: Money): Sum {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  public equals(money: Money): boolean {
    return this._amount === money._amount && this.currency === money.currency;
  }

  public toString(): string {
    return this._amount + " " + this.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
