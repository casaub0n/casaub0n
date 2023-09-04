// import hotkeys from "hotkeys-js";

// import { markdownLink } from "./markdownLink";

// const href = document.location.href;
// const title = document.title;

// hotkeys("alt+h", function (event) {
//   event.preventDefault();
//   navigator.clipboard.writeText(markdownLink(title, href));
// });

const button = document.getElementById("btn");
const title = document.querySelector("h1");
if (button && title) {
  button.addEventListener("click", () => {
    title.textContent = "CHANGED !!";
  });
}
