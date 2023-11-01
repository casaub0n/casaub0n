import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";
import Image from "next/image";

import css from "@/utils/pandaLoader";

type Props = ComponentPropsWithoutRef<"div">;

/**
 * My Image Avatar by next/image
 * @description vercel can host local image file.
 *
 * The below refrence is next.js exampele
 * @see https://github.com/vercel/next.js/tree/2c8606e59647714e5b74da46e4ff25bb63be37d9/examples/image-component
 *
 * Use margin because padding of this component cannot work
 * @example <MyAvatar className={clsx(css({ marginTop: "2rem" }))} />
 * @see https://sindresorhus.com/
 *
 * deployed story
 * @see https://casaub0n.github.io/casaub0n/?path=/story/casaub0n-page-atoms-myavatar--default
 *
 * local story
 * @see http://localhost:6006/?path=/story/casaub0n-page-atoms-myavatar--default
 */
export const MyAvatar: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={clsx(className, css({position: 'relative', width: '144px', height: '144px'}))} {...props}>
      <Image className={css({ borderRadius: "50%", objectFit: "cover" })} alt='my picture' fill src="/images/me.jpg" />
    </div>
  );
};
