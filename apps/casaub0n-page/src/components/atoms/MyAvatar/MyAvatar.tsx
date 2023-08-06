"use client";
import type { ComponentPropsWithoutRef, FC } from "react";

import { blackA, violet } from "@radix-ui/colors";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import clsx from "clsx";
import Image from "next/image";

import css from "@/utils/pandaLoader";

type Props = ComponentPropsWithoutRef<"div">;

export const MyImage = () => (
  <Image alt='my picture' height={144} src='/images/me.jpg' width={144} />
);

export const MyAvatar: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={clsx(className)} {...props}>
      <AvatarPrimitive.Root
        className={css({
          borderRadius: "100%",
          backgroundColor: blackA.blackA3,
        })}
      >
        <AvatarPrimitive.AvatarImage
          className={css({
            width: 144,
            height: 144,
            objectFit: "cover",
            borderRadius: "inherit",
          })}
          alt='my picture'
          src='/images/me.jpg'
        />
        <AvatarPrimitive.AvatarFallback
          className={css({
            width: 144,
            height: 144,
            color: violet.violet11,
            fontSize: 15,
            lineHeight: 1,
            fontWeight: 500,
          })}
          delayMs={600}
        >
          Me
        </AvatarPrimitive.AvatarFallback>
      </AvatarPrimitive.Root>
    </div>
  );
};
