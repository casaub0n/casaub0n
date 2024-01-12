import { style } from "@vanilla-extract/css";

export const indicator = (progress: number) =>
  style({
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
    transform: `translateX(-${100 - progress}%)`,
  });

export const styledProgressRoot = (bgStyle: string) =>
  style({
    position: "relative",
    overflow: "hidden",
    background: bgStyle,
    borderRadius: "99999px",
    width: 300,
    height: 25,
    transform: "translateZ(0)",
  });
