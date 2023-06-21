const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/tests/jest.customMatchers.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
};

module.exports = createJestConfig(customJestConfig);
