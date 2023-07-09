"use client";
import { MyAvatar } from "@/components/atoms/MyAvatar";

import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      <MyAvatar />
    </div>
  );
}
