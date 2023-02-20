// https://refactoring.guru/design-patterns/factory-method
export abstract class Money {
  protected amount: number;

  abstract times(multiplier: number): Money;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount === object.amount && this.constructor.name === object.constructor.name;
  }

  static doller(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
