import { markdownLink } from "./markdownLink";
import hotkeys from "hotkeys-js";

const href = document.location.href;
const title = document.title;

hotkeys("alt+h", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(markdownLink(title, href));
});
