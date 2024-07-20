import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "../utils/result";
import { getVersion } from "./get-version.ts";
import { readTemplate } from "./read-template.ts";

export const makeHeader = (): Result<string, DoSomethingError> => {
  const configJson = readTemplate();
  if (configJson.isErr()) {
    console.error(configJson);
    return err(new DoSomethingError());
  }
  const header = configJson.value;
  const packageJsonVersion = getVersion();
  const userScriptHeader = `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
// @version      ${packageJsonVersion.isErr() ? header.description : packageJsonVersion.value}\n
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
  return ok(userScriptHeader);
};
