// @ts-check

/** @type {import('jest').Config} */
const config = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
};

module.exports = config;
