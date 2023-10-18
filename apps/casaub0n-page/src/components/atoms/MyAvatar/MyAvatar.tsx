"use client";
import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";
import Image from "next/image";

import css from "@/utils/pandaLoader";

type Props = ComponentPropsWithoutRef<"div">;

/**
 * My Image Avatar by next/image
 * @description vercel can host image file.
 * @see https://github.com/vercel/next.js/blob/2c8606e59647714e5b74da46e4ff25bb63be37d9/examples/image-legacy-component/pages/layout-fill.tsx
 */
export const MyAvatar: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={clsx(className, css({position: 'relative', width: '144px', height: '144px'}))} {...props}>
      <Image alt='my picture' fill objectFit="cover" src="/images/me.jpg" style={{ borderRadius: "50%"}}/>
    </div>
  );
};
