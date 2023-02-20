// https://refactoring.guru/design-patterns/factory-method
export abstract class Money {
  protected amount: number;
  protected _currency: string;

  abstract times(multiplier: number): Money;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  public equals(object: Money): boolean {
    return this.amount === object.amount && this.constructor.name === object.constructor.name;
  }

  static doller(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.doller(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
