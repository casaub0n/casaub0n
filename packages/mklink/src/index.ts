import consola from "consola";
import { isNil } from "es-toolkit/predicate";

consola.log("loading mklink");

// eslint-disable-next-line prefer-const
let keysPressed = {};

const copyAsMarkdown = (text: string, url: string): void => {
  const markdownLink = `[${text}](${url})`;
  void navigator.clipboard.writeText(markdownLink);
};

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

const copySelectedTextAsMarkdown = (): void => {
  const { selectedText, url, title } = getTextAndUrl();
  if (!isNil(selectedText)) {
    copyAsMarkdown(selectedText, url);
  } else if (!isNil(title)) {
    copyAsMarkdown(title, url);
  }
};

// https://qiita.com/kim_t0814/items/084bb8c042defc1e232d
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  if (isNil(keysPressed["d"]) && isNil(keysPressed["v"])) {
    consola.log("press button");
    copySelectedTextAsMarkdown();
  }
});

document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});
