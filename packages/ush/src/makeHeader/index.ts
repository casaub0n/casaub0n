<<<<<<< HEAD
import { parsePackageJson } from "./parse-package-json.ts";
import { readJsonFile } from "./read-json-file.ts";
import { parseUserScript } from "./parse-userscript-json.ts";
=======
import { packageJsonParser } from "./get-version.ts";
import { readJsonFile } from "./read-json-file.ts";
import { readTemplate } from "./read-template.ts";
>>>>>>> main

export const makeHeader = (): string => {
  const packageJson = readJsonFile("package.json");
  const userScriptJson = readJsonFile("userscript.json");
<<<<<<< HEAD

  if (packageJson.isErr()) {
    console.error(packageJson.error);
    process.exit(1);
  }
  if (userScriptJson.isErr()) {
    console.error(userScriptJson.error);
    process.exit(1);
  }

  const parsedUserScriptJson = parseUserScript(userScriptJson.value);
  // TODO filter version
  const parsedPackageJsonVersion = parsePackageJson(packageJson.value);

  if (parsedUserScriptJson.issues) {
    console.error(parsedUserScriptJson.issues);
    process.exit(1);
  }

  if (parsedPackageJsonVersion.issues) {
    console.error(parsedPackageJsonVersion.issues);
    process.exit(1);
  }

  const header = parsedUserScriptJson.output;
  const pkgVersion = parsedPackageJsonVersion.output;

=======

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

>>>>>>> main
  // TODO: make header
  const userScriptHeader = `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
<<<<<<< HEAD
// @version      ${header.sameversion ? pkgVersion.version : header.version}\n
=======
// @version      ${header.sameversion ? pkgVersion : header.version}\n
>>>>>>> main
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
  return userScriptHeader;
};
