import type { ReactNode, FC } from "react";

import clsx from "clsx";
import Head from "next/head";

import styles from "@/components/layouts/styles.module.css";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import { getCssText } from "@/utils/stitches.config";

type Props = {
  /**
   * @description This component only provids layout that is html, body
   */
  children: ReactNode;
  /**
   * @description for body. maybe style?
   */
  className: string;
};

/**
 * @description Next.js Layout component
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 */
export const Layout: FC<Props> = ({ children, className }) => {
  return (
    <html lang='ja'>
      <Head>
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
