import { EmptyRoomImage } from "./EmptyRoom";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/empty room",
  component: EmptyRoomImage,
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyRoomImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default empty room",
};
