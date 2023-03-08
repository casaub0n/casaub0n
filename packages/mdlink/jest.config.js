/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
};

module.exports = config;