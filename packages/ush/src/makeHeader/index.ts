import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "../utils/result";
import { getVersion } from "./get-version.ts";
import { readTemplate } from "./read-template.ts";

export const makeHeader = (): Result<string, DoSomethingError> => {
  const parsedConfigJson = readTemplate();
  const parsedPackageJsonVersion = getVersion();

  if (parsedConfigJson.isErr()) {
    console.error(parsedConfigJson);
    return err(new DoSomethingError());
  }
  if (parsedPackageJsonVersion.isErr()) {
    console.error(parsedPackageJsonVersion);
    return err(new DoSomethingError());
  }

  const header = parsedConfigJson.value;
  const pkgVersion = parsedPackageJsonVersion.value;

  const userScriptHeader = `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
// @version      ${parsedPackageJsonVersion.isErr() ? header.version : pkgVersion.version}\n
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
  return ok(userScriptHeader);
};
