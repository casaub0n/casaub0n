import path from "node:path";
import fs from "node:fs";
import { z } from "zod";
import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "../utils/result";

const UserScript = z.object({
  name: z.string(),
  namespace: z.string(),
  version: z.string(),
  description: z.string(),
  author: z.string(),
  match: z.string(),
  grant: z.string(),
  sameversion: z.string().optional(),
});

type UserScript = z.infer<typeof UserScript>;

export const readTemplate = (): Result<UserScript, DoSomethingError> => {
  const configPath = path.join(process.cwd(), "userscript.json");
  console.log(configPath);
  const userScript = UserScript.safeParse(JSON.parse(fs.readFileSync(configPath, "utf-8")));
  return userScript.success ? ok(userScript.data) : err(new DoSomethingError());
};
