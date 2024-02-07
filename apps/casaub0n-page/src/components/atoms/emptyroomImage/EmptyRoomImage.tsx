import type { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";
import Image from "next/image";

import { cloudinaryLoader } from "@/utils/cloudinaryLoader";

type Props = ComponentPropsWithoutRef<"div">;

/**
 * This image by cloudinaryLoader
 */
export const EmptyRoomImage: FC<Props> = ({ className }) => {
  return (
        <div className={clsx(className)}>
          <Image
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt='sakura building living room'
            height={640}
            loader={cloudinaryLoader("v1665804278")}
            src='/sakura-building-livingroom.jpg'
            width={480}
          />
        </div>
  );
};
