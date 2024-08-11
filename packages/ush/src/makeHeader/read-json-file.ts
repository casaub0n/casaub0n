import path from "node:path";
import * as fs from "node:fs";
import { err, ok, type Result } from "neverthrow";

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
export const readJsonFile = (jsonPath: string): Result<string, unknown> => {
  const jsonFullPath = path.join(process.cwd(), jsonPath);
  console.log(jsonFullPath);
  try {
    const file = fs.readFileSync(jsonFullPath, { encoding: "utf8" });
    return ok(file);
  } catch (error) {
    return err(error);
  }
};
