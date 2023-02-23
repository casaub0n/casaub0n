import { Money, Bank, Sum } from "./money";

test("multiplication", () => {
  const five = Money.doller(5);
  expect(five.times(2)).toEqual(Money.doller(10));
  expect(five.times(3)).toEqual(Money.doller(15));
});

test("equality", () => {
  expect(Money.doller(5).equals(Money.doller(5))).toBe(true);
  expect(Money.doller(5).equals(Money.doller(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  expect(Money.doller(5).equals(Money.franc(5))).toBe(false);
});

test("Franc Multiplication", () => {
  const five = Money.franc(5);
  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
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

it.todo("$5 + 10 CHF = 19 when the rate is 2:1");
it.todo("$5 + $5 = $10");
it.todo("$5 + $5 return Money");

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
})
