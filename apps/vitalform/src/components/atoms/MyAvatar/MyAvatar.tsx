import type { ComponentPropsWithoutRef, FC } from "react";

import { blackA, violet } from "@radix-ui/colors";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { css } from "../../../../styled-system/css";

type Props = ComponentPropsWithoutRef<"section">;

export const MyAvatar: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={css({ display: "flex" })}>
      <AvatarPrimitive.Root
        className={css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle",
          overflow: "hidden",
          userSelect: "none",
          width: 45,
          height: 45,
          borderRadius: "100%",
          backgroundColor: blackA.blackA3,
        })}
      >
        <AvatarPrimitive.AvatarImage
          className={css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          })}
          alt='Colm Tuite'
          src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        />
        <AvatarPrimitive.AvatarFallback
          className={css({
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: violet.violet11,
            fontSize: 15,
            lineHeight: 1,
            fontWeight: 500,
          })}
          delayMs={600}
        >
          PD
        </AvatarPrimitive.AvatarFallback>
      </AvatarPrimitive.Root>
      <AvatarPrimitive.Root
        className={css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle",
          overflow: "hidden",
          userSelect: "none",
          width: 45,
          height: 45,
          borderRadius: "100%",
          backgroundColor: blackA.blackA3,
        })}
      >
        <AvatarPrimitive.AvatarImage
          className={css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          })}
          alt='Pedro Duarte'
          src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
        />
        <AvatarPrimitive.AvatarFallback
          className={css({
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: violet.violet11,
            fontSize: 15,
            lineHeight: 1,
            fontWeight: 500,
          })}
          delayMs={600}
        >
          JD
        </AvatarPrimitive.AvatarFallback>
      </AvatarPrimitive.Root>
      <AvatarPrimitive.Root
        className={css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle",
          overflow: "hidden",
          userSelect: "none",
          width: 45,
          height: 45,
          borderRadius: "100%",
          backgroundColor: blackA.blackA3,
        })}
      >
        <AvatarPrimitive.AvatarFallback
          className={css({
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: violet.violet11,
            fontSize: 15,
            lineHeight: 1,
            fontWeight: 500,
          })}
          delayMs={600}
        >
          PD
        </AvatarPrimitive.AvatarFallback>
      </AvatarPrimitive.Root>
    </div>
  );
};
