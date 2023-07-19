import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

import { MyAvatar } from "@/components/atoms/MyAvatar";

import { grid, gridItem } from "../../../../styled-system/patterns";

type Props = ComponentPropsWithoutRef<"main">;

export const Top: FC<Props> = ({ className, ...props }) => {
  return (
    <main className={clsx(className, grid({ columns: 3, gap: 0 }))} {...props}>
      <section className={clsx(gridItem({ colSpan: 2 }))}>
        <MyAvatar />
      </section>
    </main>
  );
};
