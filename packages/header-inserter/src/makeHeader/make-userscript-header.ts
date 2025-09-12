/* eslint-disable @typescript-eslint/strict-boolean-expressions -- This comment should be the appropriate sources, but it is in template. */
/* eslint-disable @cspell/spellchecker */
import { type UserScript } from "./parse-userscript-json";

/**
 * @param header - userscript.json Object
 * @param pkgVersion - version in package.json
 * @returns header str
 */
export const makeUserscriptHeader = (header: UserScript, packageVersion: string): string => {
  return `// ==UserScript==
// @name         ${header.name}
// @namespace    ${header.namespace}
// @version      ${header.sameversion ? packageVersion : header.version}
// @description  ${header.description}
// @author       ${header.author}
// @match        ${header.match}
// @grant        ${header.grant}
// ==/UserScript==\n`;
};
