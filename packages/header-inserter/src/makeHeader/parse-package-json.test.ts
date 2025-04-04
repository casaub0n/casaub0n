import { expect, test } from "vitest";
import { parsePackageJson } from "./parse-package-json";
import consola from "consola";

test("object", () => {
  const indexPackageJson = '{"version": "1.0.0"}';
  const parsedPackageJson = parsePackageJson(indexPackageJson);
  if (parsedPackageJson.success) {
    consola.log(`version: ${parsedPackageJson.output.version}`);
    expect(parsedPackageJson.output.version).toEqual("1.0.0");
  } else {
    consola.error("package.json parse error");
    consola.error(parsedPackageJson.issues);
  }
});
