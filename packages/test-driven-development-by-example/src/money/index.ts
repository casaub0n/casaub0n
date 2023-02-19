export class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount === object.amount && this.constructor.name === object.constructor.name;
  }
}
