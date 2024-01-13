import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";
import Image from "next/image";


import { div, image } from "./MyAvatar.css";

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
    <div className={clsx(className, div)} {...props}>
      <Image className={clsx(image)} alt='my picture' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/images/me.jpg" />
    </div>
  );
};
