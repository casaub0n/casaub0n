import { logger } from "../utils/logger.ts";
import { parsePackageJson } from "./parse-package-json.ts";
import { readJsonFile } from "./read-json-file.ts";
import { parseUserScript } from "./parse-userscript-json.ts";
import { makeUserscriptHeader } from "./make-userscript-header.ts";

export const makeHeader = (): string => {
  const packageJson = readJsonFile("package.json");
  const userScriptJson = readJsonFile("userscript.json");

  if (packageJson.isErr()) {
    logger.error(packageJson.error);
    process.exit(1);
  }
  if (userScriptJson.isErr()) {
    logger.error(userScriptJson.error);
    process.exit(1);
  }

  const parsedUserScriptJson = parseUserScript(userScriptJson.value);
  // TODO filter version
  const parsedPackageJsonVersion = parsePackageJson(packageJson.value);

  if (parsedUserScriptJson.issues) {
    logger.error(parsedUserScriptJson.issues);
    process.exit(1);
  }

  if (parsedPackageJsonVersion.issues) {
    logger.error(parsedPackageJsonVersion.issues);
    process.exit(1);
  }

  const header = parsedUserScriptJson.output;
  const pkgVersion = parsedPackageJsonVersion.output;

  return makeUserscriptHeader(header, pkgVersion.version);
};
