import path from "node:path";
import fs from "node:fs";
import { DoSomethingError, Failure, type Result, Success } from "../utils/result.ts";

export const getVersion = (): Result<string, DoSomethingError> => {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const version = packageJson.version;

  if (version === "string" && version !== undefined) {
    return new Success(version);
  }

  return new Failure(new DoSomethingError());
};
