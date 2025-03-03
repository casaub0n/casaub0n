import { strict as assert } from "node:assert";
import { test } from "node:test";

import { Bank, Money, Sum } from "./money";

void test("multiplication", () => {
  const five = Money.dollar(5);
  assert.deepStrictEqual(five.times(2), Money.dollar(10));
  assert.deepStrictEqual(five.times(3), Money.dollar(15));
});

void test("equality", () => {
  assert.deepStrictEqual(Money.dollar(5), Money.dollar(5));
  assert.notDeepStrictEqual(Money.dollar(5), Money.dollar(6));
  assert.notDeepStrictEqual(Money.dollar(5), Money.franc(5));
});

void test("currency", () => {
  assert.deepStrictEqual(Money.dollar(1).currency, "USD");
  assert.deepStrictEqual(Money.franc(1).currency, "CHF");
});

void test("simple addition", () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank = new Bank();
  // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
  const reduced = bank.reduce(sum, "USD");
  assert.deepStrictEqual(reduced, Money.dollar(10));
});

void test("plus return sum", () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  assert.deepStrictEqual(five, sum.augend);
  assert.deepStrictEqual(five, sum.addend);
});

void test("reduce sum", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
  const result = bank.reduce(sum, "USD");
  assert.deepStrictEqual(result, Money.dollar(7));
});

void test("reduce money", () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), "USD");
  assert.deepStrictEqual(result, Money.dollar(1));
});

void test("reduce Money different Currency", () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  assert.deepStrictEqual(result, Money.dollar(1));
});

void test("identity rate", () => {
  assert.deepStrictEqual(new Bank().rate("USD", "USD"), 1);
});

void test("mixed addition", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  assert.deepStrictEqual(result, Money.dollar(10));
});

void test("sum plus money", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
  const result = bank.reduce(sum, "USD");
  assert.deepStrictEqual(result, Money.dollar(15));
});

void test("sum times", () => {
  const fiveBucks = Money.dollar(5);
  const tesFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tesFrancs).times(2);
  // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
  const result = bank.reduce(sum, "USD");
  assert.deepStrictEqual(result, Money.dollar(20));
});
