import path from "node:path";
import fs from "node:fs";
import { err, ok, type Result } from "neverthrow";
import * as v from "valibot";

/**
 * userscript's meta block schema
 * @see https://wiki.greasespot.net/Metadata_Block
 * @see https://violentmonkey.github.io/api/metadata-block/
 */
const UserScriptSchema = v.object({
  name: v.string(),
  namespace: v.string(),
  version: v.string(),
  description: v.string(),
  author: v.string(),
  match: v.string(),
  grant: v.string(),
  sameversion: v.nullish(v.boolean()),
});

type UserScript = v.InferOutput<typeof UserScriptSchema>;

/**
 * read `userscript.json` in root project, and parsed value
 * @returns parsed userscript's value object, Result type must be used `neverthrow`
 */
export const readTemplate = (): Result<UserScript, v.FlatErrors<typeof UserScriptSchema>> => {
  const configPath = path.join(process.cwd(), "userscript.json");
  console.log(configPath);
  const userScript = v.safeParse(
    UserScriptSchema,
    JSON.parse(fs.readFileSync(configPath, "utf-8")),
  );
  return userScript.success
    ? ok(userScript.output)
    : err(v.flatten<typeof UserScriptSchema>(userScript.issues));
};
