import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import { MyAvatar } from "@/components/atoms/MyAvatar";
import { MyTweet } from "@/components/organisms/myTweet";

import { cherry_bomb_one } from "@/app/fonts";

import { styledSection, styledMyAvatar, styledH1, styledDiv } from "./Top.css"


type Props = ComponentPropsWithoutRef<"main">;

/**
 * @see http://localhost:6006/?path=/story/casaub0n-page-templates-top--default
 */
export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className)} {...props}>
      <section className={clsx(styledSection)}>
        <MyAvatar className={clsx(styledMyAvatar)} />
        <h1 className={clsx(cherry_bomb_one.className, styledH1)}>まじでやる</h1>
        <div className={clsx(styledDiv)}>
          <MyTweet />
        </div>
      </section>
    </main>
  );
};
