import { type UserScript } from "./parse-userscript-json";

/**
 * @param header - userscript.json Object
 * @param pkgVersion - version in package.json
 * @returns header str
 */
export const makeUserscriptHeader = (header: UserScript, pkgVersion: string): string => {
  return `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
// @version      ${header.sameversion ? pkgVersion : header.version}\n
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
};
