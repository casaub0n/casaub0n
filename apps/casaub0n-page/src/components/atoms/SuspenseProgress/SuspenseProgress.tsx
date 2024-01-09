"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

import { tomato } from "@radix-ui/colors";
import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";

import { indicator, styledProgressRoot } from "./SuspenseProgress.css";

export const SuspenseProgress: FC = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className={clsx(styledProgressRoot(tomato.tomato11))} value={progress}>
      <Progress.Indicator
        className={clsx(
          indicator(progress)
        )}
      />
    </Progress.Root>
  );
};
