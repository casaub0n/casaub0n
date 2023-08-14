# Test Driven Development By Example

[area: test-driven-by-example](https://github.com/casaub0n/casaub0n/labels/area%3A%20test-driven-by-example "use this label in GitHub")

- the author: Kent Beck

This project was implemented example codes by TypeScript.

## Getting Started

```console
pnpm install
pnpm test
```

## Test Environment

I followed this link 👉
[How to run the Node built-in testrunner for TypeScript files inside a specific directory? · Issue #3902 · nodejs/help](https://github.com/nodejs/help/issues/3902#issuecomment-1307124174)

This LTS version's Node.js shows the warning:
`ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time`

Node.js uses loader to run TypeScript.

[TypeScript runtime comparisons](https://github.com/privatenumber/ts-runtime-comparison)

### Motivation

Use standard functions by Node.js

## Conclusion

Test Driven Development By Example has some issues, but that's still useful book.

Kent Beck shows the way to implement the code from his idea. Some implementation looks winding road, but test case is very clear.

Currently we have more choice for TDD that is type system, integration test and maybe Model Checking.

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

If you use member variable, you must specify `this` keyword because of distinguishing memeber variable from normal variable.

## Down casting

I can't make sense that arg's type is often Object.

Don't do down casting.

## Extends class sets super constractor automatically
