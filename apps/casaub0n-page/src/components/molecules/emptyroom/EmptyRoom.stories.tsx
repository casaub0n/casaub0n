import { EmptyRoom } from "./EmptyRoom";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/empty room",
  component: EmptyRoom,
  parameters: {
    docs: {
      description: {
        component: "with next/image",
      },
    },
  },
} satisfies Meta<typeof EmptyRoom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default empty room",
  tags: ["emptyroom"],
};
