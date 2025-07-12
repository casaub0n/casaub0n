import { expect, test } from "vitest";
import { hasMonth } from "./get-schedule-content";

test("has month", () => {
  expect(hasMonth("11/2")).toBe(true);
  expect(hasMonth("2")).toBe(false);
  expect(hasMonth("")).toBe(false);
});
