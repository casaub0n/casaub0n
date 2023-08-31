import { type ComponentPropsWithoutRef, type FC } from "react";

import clsx from "clsx";
import YouTube from "react-lite-youtube-embed";

type Props = ComponentPropsWithoutRef<"div">;

/**
 * @description by react-lite-youtube-embed
 * @see https://zenn.dev/manalink_dev/articles/react-youtube-embed-vs-lighthouse#%E5%8B%95%E7%94%BB%E3%81%AE%E3%82%B5%E3%83%A0%E3%83%8D%E7%94%BB%E5%83%8F%E3%82%92%E6%9C%80%E5%88%9D%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%97%E3%80%81onclick%E3%81%A7autoplay%E3%81%AAiframe%E3%81%AB%E5%B7%AE%E3%81%97%E6%9B%BF%E3%81%88%E3%82%8B
 * @see https://github.com/TeXmeijin/react-youtube-embed-lighthouse-test/blob/main/src/app/react-lite-youtube-embed/page.tsx
 */
export const EmbedYoutube: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={clsx({ className, ...props })}>
      <YouTube id={"wm5gMKuwSYk"} title='Next.js conf' />
    </div>
  );
};
