// https://developer.chrome.com/docs/extensions/reference/commands/#event-onCommand
// eslint-disable-next-line unicorn/prefer-query-selector
const button = document.getElementById("btn");
const title = document.querySelector("h1");
if (button && title) {
  button.addEventListener("click", () => {
    title.textContent = "CHANGED !!";
  });
}
