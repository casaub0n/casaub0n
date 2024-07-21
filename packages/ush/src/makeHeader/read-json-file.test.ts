import { expect, test } from "vitest";
import { readJsonFile } from "./read-json-file";

test("mock-fs test", () => {
  const testJsonFile = readJsonFile("test.json");
  testJsonFile.isOk() ? expect(testJsonFile.value).toEqual('{ "name": "test" }') : null;
});
