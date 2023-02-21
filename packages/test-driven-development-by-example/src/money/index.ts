// https://refactoring.guru/design-patterns/factory-method
export class Money implements Expression {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  public plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }

  get currency() {
    return this._currency;
  }

  public equals(object: Money): boolean {
    return this.amount === object.amount && this.currency === object.currency;
  }

  public toString(): string {
    return this.amount + " " + this.currency;
  }

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}

export interface Expression {}

export class Bank {
  public reduce(source: Expression, to: string): Money {
    return Money.doller(10);
  }
}
