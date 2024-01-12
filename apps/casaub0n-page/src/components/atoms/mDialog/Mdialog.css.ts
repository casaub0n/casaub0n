import { style } from "@vanilla-extract/css";

export const defaultDialogStyle = style({
  padding: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid black",
  borderRadius: "8px",
});

export const defaultDialogInnerStyle = style({
  width: "500px",
  height: "500px",
  padding: "1em",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const button = style({
  width: "60px",
  height: "30px",
});
