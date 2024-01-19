import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { blackA } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import clsx from "clsx";

const inputStyles = {
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

const StyledInput = styled("input", {
  ...inputStyles,
  height: 35,
  lineHeight: 1,
  padding: "0 10px",
});

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  function InputBase({ className, ...props }, ref) {
    return <StyledInput type='email'className={clsx(className)} ref={ref} {...props} />;
  },
);
