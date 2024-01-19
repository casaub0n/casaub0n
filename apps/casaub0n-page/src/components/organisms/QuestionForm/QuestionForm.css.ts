import { blackA, mauve, violet } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const StyledFormRoot = style({
  width: 260,
});

export const StyledFormField = style({
  display: "grid",
  marginBottom: 10,
});

export const StyledFormLabel = style({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "35px",
  color: "black",
});

export const StyledFormMessage = style({
  fontSize: 13,
  color: "red",
  opacity: 0.8,
});

export const StyledFlex = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
});

export const inputStyles = {
  all: "unset",
  boxSizing: "border-box",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,

  fontSize: 15,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:hover": { boxShadow: `0 0 0 1px black` },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&::selection": { backgroundColor: blackA.blackA9, color: "white" },
};

export const Input = style({
  // inputStyles
  all: "unset",
  boxSizing: "border-box",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,

  fontSize: 15,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  ":hover": { boxShadow: `0 0 0 1px black` },
  ":focus": { boxShadow: `0 0 0 2px black` },
  "::selection": { backgroundColor: blackA.blackA9, color: "white" },

  // origin
  height: 35,
  lineHeight: 1,
  padding: "0 10px",
});

export const Textarea = style({
  // inputStyles
  all: "unset",
  boxSizing: "border-box",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,

  fontSize: 15,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  ":hover": { boxShadow: `0 0 0 1px black` },
  ":focus": { boxShadow: `0 0 0 2px black` },
  "::selection": { backgroundColor: blackA.blackA9, color: "white" },

  // origin
  resize: "none",
  padding: 10,
});

export const Button = style({
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: "100%",

  backgroundColor: "white",
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  ":hover": { backgroundColor: mauve.mauve3 },
  ":focus": { boxShadow: `0 0 0 2px black` },

  marginTop: 10,
});
