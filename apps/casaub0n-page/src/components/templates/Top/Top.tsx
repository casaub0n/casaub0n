import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import { MyAvatar } from "@/components/atoms/MyAvatar";
import { MyTweet } from "@/components/organisms/myTweet";

import css from "@/utils/pandaLoader";

import { cherry_bomb_one } from "@/app/fonts";

type Props = ComponentPropsWithoutRef<"main">;

/**
 * @see http://localhost:6006/?path=/story/casaub0n-page-templates-top--default
 */
export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className)} {...props}>
      <section className={clsx(css({ display: "grid", placeItems: "center" }))}>
        <MyAvatar className={clsx(css({ marginTop: "2rem" }))} />
        <h1 className={clsx(cherry_bomb_one.className, css({ paddingTop: "10" }))}>まじでやる</h1>
        <div className={clsx(css({ paddingTop: "10" }))}>
          <MyTweet />
        </div>
      </section>
    </main>
  );
};
