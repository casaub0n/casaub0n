import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";
import { Tweet } from "react-tweet";

import { MyAvatar } from "@/components/atoms/MyAvatar";

import css from "@/utils/pandaLoader";

import { cherry_bomb_one } from "@/app/fonts";

type Props = ComponentPropsWithoutRef<"main">;

export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className)} {...props}>
      <section className={clsx(css({ display: "grid", placeItems: "center" }))}>
        <MyAvatar className={clsx(css({ paddingTop: "10" }))} />
        <h1 className={clsx(cherry_bomb_one.className, css({ paddingTop: "10" }))}>まじでやる</h1>
        <div className={clsx(css({ paddingTop: "10" }))}>
          <Tweet id='1671802628051984384' />
        </div>
      </section>
    </main>
  );
};
