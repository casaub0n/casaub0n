import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import { MyAvatar } from "@/components/atoms/MyAvatar";

import { css } from "../../../../styled-system/css";

type Props = ComponentPropsWithoutRef<"main">;

export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className)} {...props}>
      <section className={clsx(css({ display: "grid", placeItems: "center", padding: "20" }))}>
        <MyAvatar />
      </section>
    </main>
  );
};
