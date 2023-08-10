// @ts-check

const nextJest = require("next/jest");

/**
 * TODO: https://github.com/vercel/next.js/issues/40183
 */
// @ts-ignore
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/tests/jest.customMatchers.ts"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
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
  // coveragePathIgnorePatterns: ["<rootDir>/styled-system/"],

  // Dependency packages must also be included in this list
  // transformIgnorePatterns: [`/node_modules/(?!(${esModules.join("|")})/)`],
  // And other custom config...

  // testPathIgnorePatterns: ["<rootDir>/styled-system/"],
};

module.exports = createJestConfig(customJestConfig);

// module.exports = async () => ({
//   ...(await createJestConfig(customJestConfig)()),
//   transformIgnorePatterns: [
//     "/node_modules/(?!.pnpm)(?!(react-tweet)/)",
//     "/node_modules/.pnpm/(?!(react-tweet)@)",
//     "node_modules/(?!(react-tweet)/)",
//     "^.+\\.module\\.(css|sass|scss)$",
//   ],
// });
