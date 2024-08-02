import { parsePackageJson } from "./parse-package-json.ts";
import { readJsonFile } from "./read-json-file.ts";
import { parseUserScript } from "./parse-userscript-json.ts";
import { makeUserscriptHeader } from "./make-userscript-header.ts";

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

  return makeUserscriptHeader(header, pkgVersion.version);
};
