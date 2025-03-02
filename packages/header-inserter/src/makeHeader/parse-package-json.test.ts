import { expect, test } from "vitest";
import { parsePackageJson } from "./parse-package-json";

test("object", () => {
  const indexPackageJson = '{"version": "1.0.0"}';
  const parsedPackageJson = parsePackageJson(indexPackageJson);
  if (parsedPackageJson.success) {
    console.log(`version: ${parsedPackageJson.output.version}`);
    expect(parsedPackageJson.output.version).toEqual("1.0.0");
  } else {
    console.error("package.json parse error");
    console.error(parsedPackageJson.issues);
  }
});
