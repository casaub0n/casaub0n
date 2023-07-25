import { MyImage } from "./MyAvatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Image",
  component: MyImage,
  parameters: {
    docs: {
      description: {
        component: "Avatar",
      },
    },
  },
} satisfies Meta<typeof MyImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "my Image",
};
