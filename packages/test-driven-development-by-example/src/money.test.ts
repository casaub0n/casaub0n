import { Money, Bank, Sum, Expression } from "./money";

test("multiplication", () => {
  const five = Money.doller(5);
  expect(five.times(2)).toEqual(Money.doller(10));
  expect(five.times(3)).toEqual(Money.doller(15));
});

test("equality", () => {
  expect(Money.doller(5).equals(Money.doller(5))).toBe(true);
  expect(Money.doller(5).equals(Money.doller(6))).toBe(false);
  expect(Money.doller(5).equals(Money.franc(5))).toBe(false);
});

test("currency", () => {
  expect(Money.doller(1).currency).toBe("USD");
  expect(Money.franc(1).currency).toBe("CHF");
});

test("simple addition", () => {
  const five = Money.doller(5);
  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.doller(10));
});

test("plus return sum", () => {
  const five = Money.doller(5);
  const sum = five.plus(five);
  expect(five).toBe(sum.augend);
  expect(five).toBe(sum.addend);
});

test("reduce sum", () => {
  const sum = new Sum(Money.doller(3), Money.doller(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.doller(7));
});

test("reduce money", () => {
  const bank = new Bank();
  const result = bank.reduce(Money.doller(1), "USD");
  expect(result).toEqual(Money.doller(1));
});

test("reduce Money different Currency", () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  expect(result).toEqual(Money.doller(1));
});

test("identy rate", () => {
  expect(new Bank().rate("USD", "USD")).toBe(1);
});

test("mixed addition", () => {
  const fiveBucks = Money.doller(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  expect(result).toEqual(Money.doller(10));
});

test("sum plus money", () => {
  const fiveBucks = Money.doller(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.doller(15));
});

test("sum times", () => {
  const fiveBucks = Money.doller(5);
  const tesFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tesFrancs).times(2);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.doller(20));
});
