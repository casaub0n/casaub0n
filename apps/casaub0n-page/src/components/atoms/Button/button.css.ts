/**
 * https://github.com/shuuuu10-01/useful-react-components/blob/main/src/components/Button/Button.module.css
 */

import { style, styleVariants } from "@vanilla-extract/css";

const backgroundBlue = "#1ea7fd";

const backgroundBlueHover1 = "#0787d7";

const backgroundBlueHover2 = "#daf0ff";

const backgroundBlueActive1 = "#0075be";

const backgroundBlueActive2 = "#b0e1ff";

const backgroundWhite = "#fff";

const backgroundRed = "#fc2d37";

const backgroundRedHover = "#d93535";

const backgroundRedActive = "#d30d17";

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
