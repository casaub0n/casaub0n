"use strict";

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
  version: "0.2",
  dictionaryDefinitions: [
    {
      name: "project-words",
      path: "./cspell/project-words.txt",
      addWords: true,
    },
  ],
  dictionaries: ["project-words"],
  ignorePaths: [
    "node_modules",
    "/project-words.txt",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mdx",
    "**/package.json",
    "**/.gitignore",
    "**/*.rs",
    "**/Cargo.toml",
  ],
  ignoreRegExpList: ["\!\\[.+?\\]"],
};

module.exports = cspell;
