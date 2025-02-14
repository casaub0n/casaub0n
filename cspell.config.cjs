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
  ignorePaths: ["node_modules", "/project-words.txt"],
  ignoreRegExpList: ["\!\\[.+?\\]"],
};

module.exports = cspell;
