import { filterArray, flatArray } from "./flat-map-example";
import { foodList, myName, satisfiesExampleJson } from "./satisfies-example";

console.log(satisfiesExampleJson);

// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#typeof
for (const data of flatArray) {
  if (typeof data === "string") {
    console.log(`this type is string, value is ${data}`);
  }
  if (typeof data === "number") {
    console.log(`this type is number, value is ${data}`);
  }
}

for (const data of filterArray) {
  console.log(data);
}

console.log(myName);

for (const key of Object.keys(foodList)) {
  console.log("key: " + key + ", value: " + foodList[key]);
}
