import { filterArray, flatArray } from "./flatMapExample";
import { foodList, myName, satisfiesExampleJson } from "./satisfiesExample";

console.log(satisfiesExampleJson);

// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#typeof
flatArray.forEach((data) => {
  if (typeof data === "string") {
    console.log(`this type is string, value is ${data}`);
  }
  if (typeof data === "number") {
    console.log(`this type is number, value is ${data}`);
  }
});

filterArray.forEach((data) => {
  console.log(data);
});

console.log(myName);

Object.keys(foodList).forEach((key) => {
  console.log("key: " + key + ", value: " + foodList[key]);
});
