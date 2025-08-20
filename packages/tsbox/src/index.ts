import { consola } from "consola";
import { filterArray, flatArray } from "./flat-map-example";
import { foodList, myName, satisfiesExampleJson } from "./satisfies-example";

consola.log(satisfiesExampleJson);

// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#typeof
for (const data of flatArray) {
  if (typeof data === "string") {
    consola.log(`this type is string, value is ${data}`);
  }
  if (typeof data === "number") {
    consola.log(`this type is number, value is ${data}`);
  }
}

for (const data of filterArray) {
  consola.log(data);
}

consola.log(myName);

for (const key of Object.keys(foodList)) {
  consola.log("key: " + key + ", value: " + foodList[key]);
}
