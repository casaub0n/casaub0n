import { expect, test } from "vitest";
import { packageJsonParser } from "./get-version";

test("object", () => {
  const iPackageJson = '{"version": "1.0.0"}';
  const parsedPackageJson = packageJsonParser(iPackageJson);
  if (parsedPackageJson.success) {
    console.log(`version: ${parsedPackageJson.output.version}`);
    expect(parsedPackageJson.output.version).toEqual("1.0.0");
  } else {
    console.error("error");
    console.error(parsedPackageJson.issues);
  }
});
