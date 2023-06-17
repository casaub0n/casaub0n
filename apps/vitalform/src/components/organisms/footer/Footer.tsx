import { memo } from "react";

import styles from "./styles.module.css";

export const Footer = memo(function BasicFooterBase() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>有限会社エーワンハウジング吉田</h2>
      <section className={styles.information}>
        <ul>
          <li>
            電話番号: <a href='tel:0339570093'>03-3957-0093</a>
          </li>
          <li>
            Eメール: <a href='mailto:a.one.housing@gmail.com'>a.one.housing@gmail.com</a>
          </li>
        </ul>
      </section>
    </footer>
  );
});
