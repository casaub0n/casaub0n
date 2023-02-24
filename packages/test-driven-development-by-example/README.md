# Test Driven Development By Example
[area: test-driven-by-example](https://github.com/casaub0n/casaub0n/labels/area%3A%20test-driven-by-example "use this label in GitHub")

- the author: Kent Beck

This project was implemented example codes by TypeScript.

## Conclusion
Test Driven Development By Example has some issues, but that's still useful book.

## Circular Reference
In money package, each modules uses Factory method, but it occurs the technical issue about circular reference.
In addition, the actual error message is `TypeError: Class extends value undefined is not a constructor or null`

### Solution:
This solution looks good 👉 https://jestjs.io/ja/docs/ecmascript-modules

## equals method
As Java, when we compare strings, we use `equals()` method because `String` is Object. But as TypeScript, it must be `===` operator because `string` type is primitive data type. 

## Member variable
In TypeScript Class, member variable can't use method name.

If you use member variable, you must specify `this` keyword because of distinguishing memeber variable from normal variable.

## Down casting
I can't make sense that arg's type is often Object.

Don't do down casting.

## Extends class sets super constractor automatically
