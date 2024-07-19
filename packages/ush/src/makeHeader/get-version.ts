import path from "node:path";
import fs from "node:fs";
import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "../utils/result";

export const getVersion = (): Result<string, DoSomethingError> => {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- after this, check the type and value
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- after this, check the type and value
  const version = packageJson.version;

  if (version === "string" && version !== undefined) {
    return ok(version);
  }

  return err(new DoSomethingError());
};
