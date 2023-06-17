import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = ComponentPropsWithoutRef<"section">;

export const ArticleSection: FC<Props> = ({ className, ...props }) => {
  return <section {...props} className={clsx(className, styles.container)} />;
};
