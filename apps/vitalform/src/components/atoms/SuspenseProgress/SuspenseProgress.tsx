"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

import { tomato } from "@radix-ui/colors";
import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";

import { css } from "../../../../styled-system/css";

export const SuspenseProgress: FC = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className={clsx(StyledProgressRoot)} value={progress}>
      <Progress.Indicator
        className={clsx(
          css({
            backgroundColor: "black",
            width: "100%",
            height: "100%",
            transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
            transform: `translateX(-${100 - progress}%)`,
          }),
        )}
      />
    </Progress.Root>
  );
};

const StyledProgressRoot = css({
  position: "relative",
  overflow: "hidden",
  background: tomato.tomato11,
  borderRadius: "99999px",
  width: 300,
  height: 25,
  transform: "translateZ(0)",
});
