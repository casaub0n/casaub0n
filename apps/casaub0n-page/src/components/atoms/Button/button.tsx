import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { button , size, visual } from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * size
   */
  sizeVariant?: keyof typeof size
  visualVariant?: keyof typeof visual
}

/**
 * @see https://zenn.dev/u_10/articles/8c3cda00a701e9
 */
function Button({sizeVariant = "medium", visualVariant="primary", children, className="simple-button", ...props}: ButtonProps): JSX.Element {
  return (
    <button className={clsx(button, size[sizeVariant], visual[visualVariant], className)} {...props}>
      {children}
    </button>
  )
}

export { Button };
