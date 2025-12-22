/* eslint-disable unicorn/prefer-global-this */

import consola from "consola";
import { isNil } from "es-toolkit/predicate";

// eslint-disable-next-line @cspell/spellchecker
consola.log("loading mklink");

// eslint-disable-next-line prefer-const
let keysPressed = {};

// https://qiita.com/kim_t0814/items/084bb8c042defc1e232d
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  if (keysPressed["d"] && keysPressed["v"]) {
    consola.log("press button");
    copySelectedTextAsMarkdown();
  }
});

document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});

/**
 * selected text or title
 */
const getTextAndUrl = () => {
  const selectedText = window.getSelection()?.toString();
  const url = window.location.href;
  const title = document.title;
  if (isNil(selectedText)) return { selectedText, url };
  return { title, url };
};

const copyAsMarkdown = (text: string, url: string) => {
  const markdownLink = `[${text}](${url})`;
  navigator.clipboard.writeText(markdownLink);
};

const copySelectedTextAsMarkdown = () => {
  const { selectedText, url, title } = getTextAndUrl();
  if (isNil(selectedText)) {
    copyAsMarkdown(selectedText, url);
  } else if (isNil(title)) {
    copyAsMarkdown(title, url);
  }
};
