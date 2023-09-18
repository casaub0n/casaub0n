// https://developer.chrome.com/docs/extensions/reference/commands/#event-onCommand
const button = document.getElementById("btn");
const title = document.querySelector("h1");
if (button && title) {
  button.addEventListener("click", () => {
    title.textContent = "CHANGED !!";
  });
}
