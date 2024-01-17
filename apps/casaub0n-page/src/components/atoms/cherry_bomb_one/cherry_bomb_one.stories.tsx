import clsx from "clsx";

import type { Meta, StoryObj } from "@storybook/react";

import { cherry_bomb_one } from "@/app/fonts";


const CherryBombOneText = () => (
  <p className={clsx(cherry_bomb_one.className)}>
    あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
    <br />
    またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
  </p>
);

const meta = {
  title: "atoms/cherry bomb one",
  component: CherryBombOneText,
  tags: ["autodocs"],
} satisfies Meta<typeof CherryBombOneText>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * deployed story
 * @see https://casaub0n.github.io/casaub0n/?path=/story/casaub0n-page-atoms-cherry-bomb-one--default
 *
 * local story
 * @see http://localhost:6006/?path=/story/casaub0n-page-atoms-cherry-bomb-one--default
 */
export const Default: Story = {
  name: "cherry bomb one text",
};
