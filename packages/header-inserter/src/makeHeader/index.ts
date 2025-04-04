import { parsePackageJson } from "./parse-package-json.ts";
import { readJsonFile } from "./read-json-file.ts";
import { parseUserScript } from "./parse-userscript-json.ts";
import { makeUserscriptHeader } from "./make-userscript-header.ts";
import { exit } from "node:process";
import consola from "consola";

export const makeHeader = (): string => {
  const packageJson = readJsonFile("package.json");
  const userScriptJson = readJsonFile("userscript.json");

  if (packageJson.isErr()) {
    consola.error(packageJson.error);
    exit(1);
  }
  if (userScriptJson.isErr()) {
    consola.error(userScriptJson.error);
    exit(1);
  }

  const parsedUserScriptJson = parseUserScript(userScriptJson.value);
  // TODO filter version
  const parsedPackageJsonVersion = parsePackageJson(packageJson.value);

  if (parsedUserScriptJson.issues) {
    consola.error(parsedUserScriptJson.issues);
    exit(1);
  }

  if (parsedPackageJsonVersion.issues) {
    consola.error(parsedPackageJsonVersion.issues);
    exit(1);
  }

  const header = parsedUserScriptJson.output;
  const packageVersion = parsedPackageJsonVersion.output;

  return makeUserscriptHeader(header, packageVersion.version);
};
