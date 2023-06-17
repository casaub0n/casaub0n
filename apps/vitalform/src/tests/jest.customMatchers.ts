import { getRoles } from "@testing-library/react";

interface CustomMatchers<R = unknown> {
  toBeAtom: () => R;
  toBeMolecule: () => R;
  toBeOrganism: () => R;
  toBeTemplate: () => R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

const ignoresRoles = ["generic", "presentation"];

function getRoleKeys(container: HTMLElement) {
  return Object.keys(getRoles(container)).filter((key) => !ignoresRoles.includes(key));
}

const groupRoles = [
  "group",
  "article",
  "list",
  "term",
  "tablist",
  "tabpanel",
  "table",
  "rowgroup",
  "row",
  "combobox",
];

function includeGroupRole(keys: string[]) {
  return keys.map((key) => groupRoles.includes(key)).some(Boolean);
}

const windowRoles = ["alertdialog", "dialog"];

function includeWindowRole(keys: string[]) {
  return keys.map((key) => windowRoles.includes(key)).some(Boolean);
}

const landmarkRoles = ["complementary", "form", "navigation", "region", "search"];

function includeLandmarkRole(keys: string[]) {
  return keys.map((key) => landmarkRoles.includes(key)).some(Boolean);
}

const maybeLandmarkRoles = ["banner", "contentinfo"];

function includeMaybeLandmarkRole(keys: string[]) {
  return keys.map((key) => maybeLandmarkRoles.includes(key)).some(Boolean);
}

function includeMainRole(keys: string[]) {
  return keys.includes("main");
}

function fail(message: string) {
  return { pass: false, message: () => message };
}

function toBeAtom(container: HTMLElement) {
  const keys = getRoleKeys(container);
  if (keys.length >= 2) {
    return fail("Atom should structed by single role.");
  }
  if (includeGroupRole(keys)) {
    return fail("Atom should not include group role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Atom should not include window role.");
  }
  if (includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeMainRole(keys)) {
    return fail("Atom should not include landmark role.");
  }
  return { pass: true, message: () => "it Atom" };
}

function toBeMolecule(container: HTMLElement) {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Molecule should structed by multiple role.");
  }
  if (includeLandmarkRole(keys)) {
    return fail("Molecule should not include landmark role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Molecule should not include window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Molecule should not include main role.");
  }
  return { pass: true, message: () => "it Molecule" };
}

function toBeOrganism(container: HTMLElement) {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Organism should structed by multiple role.");
  }
  if (!(includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeWindowRole(keys))) {
    return fail("Organism should structed by landmark or window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Organism should not include main role.");
  }
  return { pass: true, message: () => "it Organism" };
}

function toBeTemplate(container: HTMLElement) {
  const keys = getRoleKeys(container);
  if (!includeMainRole(keys)) {
    return fail("Template should include main role.");
  }
  return { pass: true, message: () => "it Template" };
}

// @ts-ignore
expect.extend({ toBeAtom, toBeMolecule, toBeOrganism, toBeTemplate });
