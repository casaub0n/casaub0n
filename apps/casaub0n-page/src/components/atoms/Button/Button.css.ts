import { style, styleVariants } from "@vanilla-extract/css";

export const button = style({
  fontWeight: "bold",
  cursor: "pointer",
  backgroundColor: "var(--background-white)",
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
    color: "var(--background-white)",
    backgroundColor: "var(--background-blue)",
    ":hover": {
      backgroundColor: "var(--background-blue-hover1)",
    },
    ":active": {
      backgroundColor: "var(--background-blue-active1)",
    },
  },
  secondary: {
    color: "var(--background-blue)",
    borderColor: "var(--background-blue)",
    ":hover": {
      backgroundColor: "var(--background-blue-hover2)",
    },
    ":active": {
      backgroundColor: "var(--background-blue-active2)",
    },
  },
  alert: {
    color: "var(--background-white)",
    backgroundColor: "var(--background-red)",
  },
});
