import { expect, test } from "vitest";
import { readJsonFile } from "./read-json-file";
import consola from "consola";

test("read test.json file", () => {
  const testJsonFile = readJsonFile("./test.json");
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- test
  testJsonFile.isOk()
    ? // eslint-disable-next-line @cspell/spellchecker
      expect(testJsonFile.value).toEqual('{ "name": "hoge" }\n')
    : consola.error("read json file error");
});
