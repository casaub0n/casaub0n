import { expect, test } from "vitest";
import { badCanAccessDashboard, goodCanAccessDashboard, type User } from "./deepNest";

test("dashboard is OK", () => {
  const user: User = {
    id: 1,
    name: "Casaub0n",
    isActive: true,
    role: "admin",
    emailVerified: true,
  };
  expect(badCanAccessDashboard(user)).toBeTruthy();
  expect(goodCanAccessDashboard(user)).toBeTruthy();
});
