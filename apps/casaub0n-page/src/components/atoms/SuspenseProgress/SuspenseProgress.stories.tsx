import { SuspenseProgress } from "./SuspenseProgress";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/SuspenseProgress",
  component: SuspenseProgress,
  parameters: {
    docs: {
      description: {
        component: "Progress bar",
      },
    },
  },
} satisfies Meta<typeof SuspenseProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default SuspenseProgress",
};
