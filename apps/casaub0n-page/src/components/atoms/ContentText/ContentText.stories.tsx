import { ContentText } from "./ContentText";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Content text",
  component: ContentText,
  parameters: {
    docs: {
      description: {
        component: "p tag",
      },
    },
  },
} satisfies Meta<typeof ContentText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Help!",
  },
};
