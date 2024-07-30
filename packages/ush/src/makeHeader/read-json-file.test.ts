import { expect, test } from "vitest";
import { readJsonFile } from "./read-json-file";

// hoge
test("read test.json file", () => {
  const testJsonFile = readJsonFile("./test.json");
  testJsonFile.isOk()
    ? expect(testJsonFile.value).toEqual('{ "name": "hoge" }')
    : console.error("read json file error");
});
