import { memo } from "react";

import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.css";

export const NavBar = memo(function BasicHeaderBase() {
  return (
    <aside className="navbar">
      <div className="container flex">
        <Link passHref href="/" className={clsx(styles.logoImage)}>Home</Link>
        <nav aria-label="メインナビゲーション">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
});
