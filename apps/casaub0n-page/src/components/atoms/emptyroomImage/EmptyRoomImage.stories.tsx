import { EmptyRoomImage } from "./EmptyRoomImage";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/empty room",
  component: EmptyRoomImage,
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyRoomImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default empty room",
  args: {
    className: "emptyroom"
  }
};
