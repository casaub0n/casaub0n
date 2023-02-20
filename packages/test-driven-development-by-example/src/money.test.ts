import { Money } from "./money";

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
