import path from "node:path";
import * as fs from "node:fs/promises";
import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "../utils/result";

/**
 * @param jsonPath - read json file
 * @returns Result type by neverthrow
 * @example
 * ```ts
 * const packageJson = readJsonFile("package.json");
 * if (packageJson.isOk()) {
 *   console.log(packageJson.value);
 * }
 * ```
 */
export const readJsonFile = (jsonPath: string): Result<string, DoSomethingError> => {
  const jsonFullPath = path.join(process.cwd(), jsonPath);
  fs.readFile(jsonFullPath, { encoding: "utf8" })
    .then((file) => {
      return ok(file);
    })
    // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable -- exception
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- exception
      return err(new DoSomethingError(error));
    });
  return err(new DoSomethingError("error"));
};
