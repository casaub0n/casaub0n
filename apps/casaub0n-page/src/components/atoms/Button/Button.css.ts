/**
 * https://github.com/shuuuu10-01/useful-react-components/blob/main/src/components/Button/Button.module.css
 */

import { createVar, style, styleVariants } from "@vanilla-extract/css";

/**
 * I have not understood variable https://vanilla-extract.style/documentation/api/create-var/
 * color scheme is here: https://github.com/shuuuu10-01/useful-react-components/blob/main/src/index.css
 */
export const bgColor = createVar();

export const backgroundBlue = style({
  vars: {
    [bgColor]: "#1ea7fd",
  },
});

export const backgroundBlueHover1 = style({
  vars: {
    [bgColor]: "#0787d7",
  },
});

export const backgroundBlueHover2 = style({
  vars: {
    [bgColor]: "#daf0ff",
  },
});

export const backgroundBlueActive1 = style({
  vars: {
    [bgColor]: "#0075be",
  },
});

export const backgroundBlueActive2 = style({
  vars: {
    [bgColor]: "#b0e1ff",
  },
});

export const backgroundWhite = style({
  vars: {
    [bgColor]: "#fff",
  },
});

export const backgroundRed = style({
  vars: {
    [bgColor]: "#fc2d37",
  },
});

export const backgroundRedHover = style({
  vars: {
    [bgColor]: "#d93535",
  },
});

export const backgroundRedActive = style({
  vars: {
    [bgColor]: "#d30d17",
  },
});

export const button = style({
  fontWeight: "bold",
  cursor: "pointer",
  backgroundColor: backgroundWhite,
  border: "2px solid transparent",
  ":disabled": {
    pointerEvents: "none",
    opacity: "0.6",
  },
});

export const size = styleVariants({
  small: {
    padding: "0.25rem 0.75rem",
    fontSize: "12px",
    borderRadius: "4px",
  },
  medium: {
    padding: "0.5rem 1rem",
    fontSize: "16px",
    borderRadius: "8px",
  },
  large: {
    padding: "0.5rem 3rem",
    fontSize: "20px",
    borderRadius: "8px",
  },
});

export const visual = styleVariants({
  primary: {
    color: backgroundWhite,
    backgroundColor: backgroundBlue,
    ":hover": {
      backgroundColor: backgroundBlueHover1,
    },
    ":active": {
      backgroundColor: backgroundBlueActive1,
    },
  },
  secondary: {
    color: backgroundBlue,
    borderColor: backgroundBlue,
    ":hover": {
      backgroundColor: backgroundBlueHover2,
    },
    ":active": {
      backgroundColor: backgroundBlueActive2,
    },
  },
  alert: {
    color: backgroundWhite,
    backgroundColor: backgroundRed,
    ":hover": {
      backgroundColor: backgroundRedHover,
    },
    ":active": {
      backgroundColor: backgroundRedActive,
    },
  },
});
