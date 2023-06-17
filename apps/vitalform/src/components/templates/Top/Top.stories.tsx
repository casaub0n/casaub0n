import { Top } from "./Top";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "templates/Top",
  component: Top,
  parameters: {
    docs: {
      description: {
        component: "exactly top page",
      },
    },
  },
} satisfies Meta<typeof Top>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Top",
  tags: ["Top"],
};
