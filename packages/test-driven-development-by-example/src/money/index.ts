/**
 * @see https://refactoring.guru/design-patterns/factory-method
 */
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * amout * multiplier
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

type Rate = {
  pair: [string, string];
  rate: number;
};

export class Bank {
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
      rate: rate,
    };
  }
}

export class Sum implements Expression {
  #__augend: Expression;
  #__addend: Expression;

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
