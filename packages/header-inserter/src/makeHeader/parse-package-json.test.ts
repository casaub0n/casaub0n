/* eslint-disable no-console -- this is test */
import { expect, test } from "vitest";
import { parsePackageJson } from "./parse-package-json";

test("object", () => {
  const iPackageJson = '{"version": "1.0.0"}';
  const parsedPackageJson = parsePackageJson(iPackageJson);
  if (parsedPackageJson.success) {
    console.log(`version: ${parsedPackageJson.output.version}`);
    expect(parsedPackageJson.output.version).toEqual("1.0.0");
  } else {
    console.error("package.json parse error");
    console.error(parsedPackageJson.issues);
  }
});
