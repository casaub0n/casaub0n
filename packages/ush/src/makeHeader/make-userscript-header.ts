import { type UserScript } from "./parse-userscript-json";

/**
 * @param header - userscript.json Object
 * @param pkgVersion - version in package.json
 * @returns header str
 */
export const makeUserscriptHeader = (header: UserScript, pkgVersion: string): string => {
  return `// ==UserScript==
// @name         ${header.name}
// @namespace    ${header.namespace}
// @version      ${header.sameversion ? pkgVersion : header.version}
// @description  ${header.description}
// @author       ${header.author}
// @match        ${header.match}
// @grant        ${header.grant}
// ==/UserScript==\n`;
};
