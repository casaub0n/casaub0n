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

const getSelectedTextAndUrl = () => {
  const selectedText = window.getSelection()?.toString();
  const url = window.location.href;
  return { selectedText, url };
};

const copyAsMarkdown = (selectedText: string, url: string) => {
  let markdownLink = `[${selectedText}](${url})`;
  navigator.clipboard.writeText(markdownLink);
};

const copySelectedTextAsMarkdown = () => {
  const { selectedText, url } = getSelectedTextAndUrl();
  if (selectedText) copyAsMarkdown(selectedText, url);
};
