// https://refactoring.guru/design-patterns/factory-method
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  public plus(addend: Money) {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this._currency, to);
    if (rate) return new Money(this._amount / rate, to);
    return new Money(this._amount / 2, to); // TODO
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  public equals(object: Money): boolean {
    return this._amount === object._amount && this.currency === object.currency;
  }

  public toString(): string {
    return this._amount + " " + this.currency;
  }

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}

export class Bank {
  private rates: Map<Pair, number>;

  constructor() {
    this.rates = new Map<Pair, number>();
    // this.rates = rates;
  }

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public rate(from: string, to: string) {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to));
  }

  public addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to), rate);
  }
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

export class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(pair: Pair): boolean {
    return this.from === pair.from && this.to === pair.to;
  }

  public hasCode(): number {
    return 0;
  }
}
