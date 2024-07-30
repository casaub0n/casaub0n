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

/**
 * read `userscript.json` in root project, and parsed value
 *
 * @param userScriptJsonObjStr - usescript.json object's str
 * @returns parsed usescript.json object
 * @example
 * ```ts
 * // show version in usescript.json
 * const parsedPackageJson = packageJsonParser('{"version": "1.0.0"}');
 * parsedPackageJson.success ? console.log(parsedPackageJson.version) : console.error(parsedPackageJson.issues);
 * ```
 */
export const parseUserScript = (
  userScriptJsonObjStr: string,
): v.SafeParseResult<typeof UserScriptSchema> => {
  const parsedUserScript = v.safeParse(UserScriptSchema, JSON.parse(userScriptJsonObjStr));
  return parsedUserScript;
};
