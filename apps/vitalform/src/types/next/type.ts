import type { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type GetLayout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: GetLayout;
};

export type AppPropWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};