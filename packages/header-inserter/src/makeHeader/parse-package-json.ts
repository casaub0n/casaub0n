import * as v from "valibot";

const packageJsonSchema = v.object({
  version: v.string("version strings please"),
});

/**
 * @param packageJsonObjStr - package.json object's str
 * @returns parsed package.json object
 * @example
 * ```ts
 * // show version in package.json
 * const parsedPackageJson = packageJsonParser('{"version": "1.0.0"}');
 * parsedPackageJson.success ? console.log(parsedPackageJson.version) : console.error(parsedPackageJson.issues);
 * ```
 */
export const parsePackageJson = (
  packageJsonObjectString: string,
): v.SafeParseResult<typeof packageJsonSchema> => {
  const parsedPackageJson = v.safeParse(packageJsonSchema, JSON.parse(packageJsonObjectString));
  return parsedPackageJson;
};
