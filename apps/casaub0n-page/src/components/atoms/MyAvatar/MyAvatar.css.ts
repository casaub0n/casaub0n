import { style } from "@vanilla-extract/css";

export const div = style({
  position: "relative",
  width: "144px",
  height: "144px",
});

export const image = style({
  borderRadius: "50%",
  objectFit: "cover",
});
