/* eslint-disable @cspell/spellchecker */
import { expect, test } from "vitest";
import { parsePackageJson } from "./parse-package-json";
import consola from "consola";

test("object", () => {
  const userScriptJson = `
  {
    "name": "test userscript",
    "namespace": "test namespace",
    "version": "1.0.0",
    "description": "This script is userscript",
    "author": "casaub0n",
    "match": "https://example.com",
    "grant": "none",
    "sameversoin": true
  }
  `;
  const parsedUserScriptJson = parsePackageJson(userScriptJson);
  if (parsedUserScriptJson.success) {
    consola.log(`version: ${parsedUserScriptJson.output.version}`);
    expect(parsedUserScriptJson.output.version).toEqual("1.0.0");
  } else {
    consola.error("userscriptjson error");
    consola.error(parsedUserScriptJson.issues);
  }
});
