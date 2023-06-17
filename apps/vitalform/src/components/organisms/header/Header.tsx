import { memo } from "react";

import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.css";

export const Header = memo(function BasicHeaderBase() {
  return (
    <header className={clsx(styles.module)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.textContainer)}>
          <h1 className={clsx(styles.h1Large)}>A ONE HOUSING YOSHIDA</h1>
          <Link href={"https://a-one-housing-smile.blogspot.com/p/blog-page.html"} passHref className={clsx(styles.btnOutlineLg)}>
          blog
          </Link>
        </div>
      </div>
    </header>
  );
});
