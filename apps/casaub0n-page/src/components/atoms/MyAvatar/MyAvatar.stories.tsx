import { MyAvatar } from "./MyAvatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/MyAvatar",
  component: MyAvatar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "show image icon"
  }
} satisfies Meta<typeof MyAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default my avatar",
};
