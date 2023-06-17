import type { ReactNode, FC } from "react";

import Head from "next/head";

import styles from "@/components/layouts/styles.module.css";
import { pageTitle } from "@/components/meta";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

type Layout = {
  children: ReactNode;
};

export const Layout: FC<Layout> = ({ children }) => {
  return (
    <html lang='ja'>
      <Head>
        <title>{pageTitle("トップページ")}</title>
        <meta key='robots' name='robots' content='all' />
      </Head>
      <body className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </body>
    </html>
  );
};
