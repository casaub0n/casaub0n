import { MyAvatar } from "./MyAvatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Avatar",
  component: MyAvatar,
  parameters: {
    docs: {
      description: {
        component: "Avatar",
      },
    },
  },
} satisfies Meta<typeof MyAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default my avatar",
};
