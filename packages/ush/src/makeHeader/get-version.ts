import path from "node:path";
import fs from "node:fs";
import { err, ok, type Result } from "neverthrow";
import * as v from "valibot";

const PackageJsonVersionSchema = v.object({
  version: v.string(),
});

type PackageJsonVersion = v.InferOutput<typeof PackageJsonVersionSchema>;

export const getVersion = (): Result<
  PackageJsonVersion,
  v.FlatErrors<typeof PackageJsonVersionSchema>
> => {
  const packageJsonPath = path.join(process.cwd(), "package.json");

  const version = v.safeParse(
    PackageJsonVersionSchema,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- This json
    JSON.parse(fs.readFileSync(packageJsonPath, "utf-8")).version,
  );

  return version.success
    ? ok(version.output)
    : err(v.flatten<typeof PackageJsonVersionSchema>(version.issues));
};
