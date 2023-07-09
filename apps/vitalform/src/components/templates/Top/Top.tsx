import type { FC } from "react";

import clsx from "clsx";
import Head from "next/head";

import { pageTitle } from "@/components/meta";
import { Main } from "@/components/molecules/main";
import styles from "@/components/templates/Top/styles.module.css";

type Props = {
  panda: string;
};

export const Top: FC<Props> = ({ panda }) => {
  return (
    <main className={clsx(panda, styles.component)}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <Main />
    </main>
  );
};
