import { expect, test } from "vitest";
import { type UserScript } from "./parse-userscript-json";
import { makeUserscriptHeader } from "./make-userscript-header";

test("the version in output string is package.json's version if sameversion true", () => {
  const inputObject: UserScript = {
    name: "test obj",
    namespace: "NONE",
    version: "1.0.0",
    description: "testing is good",
    author: "casaub0n",
    match: "true",
    grant: "NONE",
    sameversion: true,
  };

  const outputString = `// ==UserScript==
// @name         test obj
// @namespace    NONE
// @version      2.0.0
// @description  testing is good
// @author       casaub0n
// @match        true
// @grant        NONE
// ==/UserScript==\n`;
  expect(makeUserscriptHeader(inputObject, "2.0.0")).toStrictEqual(outputString);
});

test("the version in output string is userscript.json's version if sameversion false", () => {
  const inputObject: UserScript = {
    name: "test obj",
    namespace: "NONE",
    version: "1.0.0",
    description: "testing is good",
    author: "casaub0n",
    match: "true",
    grant: "NONE",
    sameversion: false,
  };

  const outputString = `// ==UserScript==
// @name         test obj
// @namespace    NONE
// @version      1.0.0
// @description  testing is good
// @author       casaub0n
// @match        true
// @grant        NONE
// ==/UserScript==\n`;
  expect(makeUserscriptHeader(inputObject, "2.0.0")).toStrictEqual(outputString);
});
