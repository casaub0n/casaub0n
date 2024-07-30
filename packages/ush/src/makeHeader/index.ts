import { packageJsonParser } from "./get-version.ts";
import { readJsonFile } from "./read-json-file.ts";
import { readTemplate } from "./read-template.ts";

export const makeHeader = (): string => {
  const packageJson = readJsonFile("package.json");
  const userScriptJson = readJsonFile("userscript.json");

  if (packageJson.isErr()) {
    console.error(packageJson.error);
    process.exit(1);
  }
  if (userScriptJson.isErr()) {
    console.error(userScriptJson.error);
    process.exit(1);
  }

  const parsedConfigJson = readTemplate();
  // TODO filter version
  const parsedPackageJsonVersion = packageJsonParser(packageJson.value);

  if (parsedConfigJson.isErr()) {
    console.error(parsedConfigJson.error);
    process.exit(1);
  }

  if (parsedPackageJsonVersion.issues) {
    console.error(parsedPackageJsonVersion.issues);
    process.exit(1);
  }

  const header = parsedConfigJson.value;
  const pkgVersion = parsedPackageJsonVersion.output;

  // TODO: make header
  const userScriptHeader = `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
// @version      ${header.sameversion ? pkgVersion : header.version}\n
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
  return userScriptHeader;
};
