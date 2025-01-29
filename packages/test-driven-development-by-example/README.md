# Test Driven Development By Example

[area: test-driven-by-example](https://github.com/casaub0n/casaub0n/labels/area%3A%20test-driven-by-example "use this label in GitHub")

- the author: Kent Beck

This project is implemented example codes by TypeScript.

## Getting Started

```console
pnpm install
pnpm test
```

## Test Environment

That must be standard feature in the future.

Node.js has to use loader to run TypeScript.

[TypeScript runtime comparisons](https://github.com/privatenumber/ts-runtime-comparison)

**:sparkles:[tsx](https://github.com/privatenumber/tsx):sparkles:**

`tsx` can run TypeScript directly, it can use watch mode too.

### Motivation

Use standard Node.js's functions

### Notes

This node version is expected over 20 currently. As tsup, `node:test` is not proper solving in build process.

I hope this:

```console
tsup src/money.test.ts
```

## Conclusion

Test Driven Development By Example has some technical issues that is occurred by legacy programming environment, but the article is still useful book.

Kent Beck shows the way to implement the code from his idea. Some implementation looks winding road, but test case is very clear.

Currently we have more choices for TDD that is type system, integration test and maybe Model Checking.

## Circular Reference

In money package, each modules uses Factory method, but it occurs the technical issue about circular reference.
In addition, the actual error message is `TypeError: Class extends value undefined is not a constructor or null`

### Solution:

This solution looks good 👉 https://jestjs.io/ja/docs/ecmascript-modules

## equals method

As Java, when we compare strings, we use `equals()` method because `String` is Object. But as TypeScript, it must be `===` operator because `string` type is primitive data type.

`HashMap` is Object in Java that means Key Object must has equals and hashcode method. Lately that must implement `Comarable` like this:

https://interprism.hatenablog.com/entry/2014/04/04/125444

```Java
package jp.co.interprism;

public class HashCompareEqualKey implements Comparable<HashCompareEqualKey> {

    private int num;

    public HashCompareEqualKey(int num) {
        this.num = num;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HashCompareEqualKey key = (HashCompareEqualKey) o;
        if (num != key.num) return false;
        return true;
    }

    @Override
    public int hashCode() {
        return num;
    }

    @Override
    public int compareTo(HashCompareEqualKey o) {
        return Integer.compare(num, o.num);
    }
}
```

In this project, I used tuple because it is easy as TypeScript.

## Member variable

In TypeScript Class, member variable can't use method name.

If you use member variable, you must specify `this` keyword because of distinguishing member variable from normal variable.

## Down casting

I can't make sense that arg's type is often Object.

Don't do down casting.

## Extends class sets super constructor automatically
