console.log("loading mklink");

// https://qiita.com/kim_t0814/items/084bb8c042defc1e232d
document.addEventListener("keydown", function (event) {
  keysPressed[event.key] = true;
  if (keysPressed["d"] && keysPressed["v"]) {
    console.log("press button");
    copySelectedTextAsMarkdown();
  }
});

document.addEventListener("keyup", function (event) {
  delete keysPressed[event.key];
});

let keysPressed = {};

/**
 * selected text or title
 */
const getTextAndUrl = () => {
  const selectedText = window.getSelection()?.toString();
  const url = window.location.href;
  const title = document.title;
  if (selectedText) return { selectedText, url };
  return { title, url };
};

const copyAsMarkdown = (text: string, url: string) => {
  let markdownLink = `[${text}](${url})`;
  navigator.clipboard.writeText(markdownLink);
};

const copySelectedTextAsMarkdown = () => {
  const { selectedText, url, title } = getTextAndUrl();
  if (selectedText) {
    copyAsMarkdown(selectedText, url);
  } else {
    if (title) copyAsMarkdown(title, url);
  }
};
