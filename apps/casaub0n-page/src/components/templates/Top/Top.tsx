import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import { MyAvatar } from "@/components/atoms/MyAvatar";
import { MyTweet } from "@/components/organisms/myTweet";

import { section, myAvatar, h1, div } from "./Top.css"

import { cherry_bomb_one } from "@/app/fonts";

type Props = ComponentPropsWithoutRef<"main">;

/**
 * @see http://localhost:6006/?path=/story/casaub0n-page-templates-top--default
 */
export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className)} {...props}>
      <section className={clsx(section)}>
        <MyAvatar className={clsx(myAvatar)} />
        <h1 className={clsx(cherry_bomb_one.className, h1)}>まじでやる</h1>
        <div className={clsx(div)}>
          <MyTweet />
        </div>
      </section>
    </main>
  );
};
