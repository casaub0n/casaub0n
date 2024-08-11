import { expect, test } from "vitest";
import { readJsonFile } from "./read-json-file";

test("read test.json file", () => {
  const testJsonFile = readJsonFile("./test.json");
  testJsonFile.isOk()
    ? expect(testJsonFile.value).toEqual('{ "name": "hoge" }\n')
    : console.error("read json file error");
});
