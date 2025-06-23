import type Bank from "./bank";
import type Money from "./money";

export default interface Expression {
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}
