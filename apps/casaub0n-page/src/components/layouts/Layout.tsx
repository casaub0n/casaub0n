import type { ReactNode, FC } from "react";

import clsx from "clsx";
import Head from "next/head";

import styles from "@/components/layouts/styles.module.css";
// import { pageTitle } from "@/components/meta";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import { getCssText } from "@/utils/stitches.config";

type Props = {
  children: ReactNode;
  className: string;
};

export const Layout: FC<Props> = ({ children, className }) => {
  return (
    <html lang='ja'>
      <Head>
        {/* <title>{pageTitle(title)}</title> */}
        <meta name='robots' content='all' key='robots' />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body className={clsx(styles.container, className)}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </body>
    </html>
  );
};
