// https://refactoring.guru/design-patterns/factory-method
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

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

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}

export interface Expression {
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}

export class Bank {
  private rates: Map<Pair, number>;

  constructor() {
    this.rates = new Map<Pair, number>();
  }

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public rate(from: string, to: string): number {
    const rate = this.rates.get(new Pair(from, to));
    if (rate) return rate;
    return 1; // TODO
  }

  public addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to), rate);
  }
}

export class Sum implements Expression {
  private _augend: Expression;
  private _addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this._augend = augend;
    this._addend = addend;
  }

  public times(multiplier: number): Expression {
    return new Sum(this._augend.times(multiplier), this._addend.times(multiplier));
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this._augend.reduce(bank, to).amount + this._addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  get augend() {
    return this._addend;
  }

  get addend() {
    return this._addend;
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
