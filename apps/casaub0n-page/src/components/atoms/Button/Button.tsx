import type { FC, ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import { button } from "./Button.css";
import { size, visual } from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeVariant?: keyof typeof size
  visualVariant?: keyof typeof visual
}

/**
 * @see https://zenn.dev/u_10/articles/8c3cda00a701e9
 */
export const Button: FC<ButtonProps> = ({
  sizeVariant = "medium",
  visualVariant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        button,
        size[sizeVariant],
        visual[visualVariant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
